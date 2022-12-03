from urllib import response
from fastapi import Depends, APIRouter, HTTPException, status
from sqlalchemy.orm import Session
from core import auth as core_auth
from database import get_db
from datetime import datetime
from schemas.surveys import SurveyCreate, SurveyOut
from models.surveys import Survey
from typing import List


router = APIRouter()

@router.post("/")
async def create_survey(survey: SurveyCreate, db: Session = Depends(get_db),
                        current_user: str = Depends(core_auth.get_current_user)):
    try:
        survey.created_date = datetime.now()
        new_survey = Survey(user_uuid=current_user.first().uuid, **survey.dict())
        db.add(new_survey)
        db.commit()

    except Exception as exc:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                detail="Operation not permitted, duplicate survey data may be involved") from exc
    return new_survey.user_uuid

@router.get("/", response_model=List[SurveyOut])
async def get_survey(current_user: str = Depends(core_auth.get_current_user)):
    return current_user.first().survey


# When working with survey data updation/deletion, make sure to check first that the user performing 
# the operations is infact the one who owns the survey data

#SQLAlchemy sample query 
# result = db.query(models.Post,func.count(Vote.post_id).label("Votes")).join(models.Vote,
# models.Vote.post_id==models.Post.id, isouter=True).group_by(models.Post.id).all()
