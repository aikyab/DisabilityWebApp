from fastapi import status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from fastapi.security.oauth2 import OAuth2PasswordRequestForm

# from sqlalchemy.sql.functions import func
from core import auth as core_auth
from database import get_db
import schemas.users as schemas
from models.users import User
from core.utils import verify

router = APIRouter()

@router.post('/',response_model=schemas.Token)
def login(user_creds: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == user_creds.username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
        detail="Invalid Credentials!")
    if not verify(user_creds.password,user.password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
        detail="Invalid Credentials!")
    access_token = core_auth.create_access_token(data = {"uuid": user.uuid})

    return {"access_token" : access_token, "token_type" : "bearer"}
