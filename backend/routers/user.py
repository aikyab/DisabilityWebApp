from fastapi import status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from typing import List, Optional
from core import auth as core_auth
from uuid import uuid4
# from sqlalchemy.sql.functions import func
from database import get_db
import schemas.users as schemas
from models.users import User
from core.utils import hash_password, verify

router = APIRouter()

@router.get("/", response_model=List[schemas.UserCreate])
async def get_users(limit: int = 10, skip: int = 0,
                    search: Optional[str] = "",db: Session = Depends(get_db)):
    return db.query(User).limit(limit).offset(skip).all()

@router.get("/getById/{uuid}", response_model=schemas.UserOut)
async def get_by_id(uuid: str, db: Session = Depends(get_db)):
    fetched_user = db.query(User).filter(User.uuid == uuid).first()
    if not fetched_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"No user with uuid {uuid} record found!")
    return fetched_user

@router.get("/getByEmail/{email}", response_model=schemas.UserOut)
async def get_by_email(email: str, db: Session = Depends(get_db)):
    fetched_user = db.query(User).filter(User.email == email).first()
    if not fetched_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"No user with email {email} found!")
    return fetched_user

@router.post("/", response_model=schemas.UserOut)
async def create_user(user_add: schemas.UserCreate, db: Session = Depends(get_db)):
    user_add.password = hash_password(user_add.password)
    user_add.uuid = str(uuid4())
    new_user = User(**user_add.dict())
    user_query = db.query(User).filter(User.email == new_user.email).first()
    if user_query:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
            detail=f"User with Email - {new_user.email} already exists!")
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return user_add


@router.put("/", response_model=schemas.UserOut)
async def update_password(user_update: schemas.UpdatePassword, db: Session = Depends(get_db),
                            current_user: str = Depends(core_auth.get_current_user)):
    if not current_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
            detail="User does not exist!")
    if not verify(user_update.old_password,current_user.password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
        detail="Incorrect old password!")
    new_password = hash_password(user_update.new_password)
    setattr(current_user,"password",new_password)
    db.commit()
    return current_user