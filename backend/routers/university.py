
from fastapi import status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from database import get_db
from typing import List
import schemas.university as schemas
from models.university import University
from core import auth as core_auth

router = APIRouter()

@router.post("/", response_model=schemas.UniversityOut)
async def create_university(uni_add: schemas.UniversityCreate, db: Session = Depends(get_db)):
    
    new_uni = University(**uni_add.dict())
    db.add(new_uni)
    db.commit()
    db.refresh(new_uni)

    return new_uni

@router.get("/", response_model=List[schemas.UniversityMeta])
async def get_universities(db: Session = Depends(get_db)):
    
    unis = db.query(University).all()

    return unis

@router.get("/getById/{id}", response_model=schemas.UniversityDetails)
async def get_uni_by_id(id: int, db: Session = Depends(get_db)):
    fetched_uni = db.query(University).filter(University.id == id).first()
    if not fetched_uni:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"No university with id {id} record found!")
    return fetched_uni

