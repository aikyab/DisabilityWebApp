from pydantic import BaseModel
from datetime import datetime
from .users import UserOut

class SurveyBase(BaseModel):
    age: int
    gender: str
    disability: str
    created_date: datetime = datetime.now()

    class Config:
        orm_mode = True

class SurveyOut(BaseModel):
    id: int
    age: int
    gender: str
    disability: str
    created_date: datetime
    user_uuid: str
    users: UserOut

    class Config:
        orm_mode = True

class SurveyCreate(SurveyBase):
    pass
