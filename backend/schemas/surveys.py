from pydantic import BaseModel
from typing import List
from datetime import datetime
# from .users import UserOut

class SurveyBase(BaseModel):

    university_type: str
    us_state: str
    geo_setting: str
    school_size: str
    selectivity: str
    gpa: float
    act: float
    sat: float
    general_accm: List[str]
    supports: List[str]
    other: List[str]
    majors: List[str]
    created_date: datetime = datetime.now()

    class Config:
        orm_mode = True

class SurveyOut(BaseModel):
    id: int
    university_type: str
    us_state: str
    geo_setting: str
    school_size: str
    selectivity: str
    gpa: float
    act: float
    sat: float
    general_accm: List[str]
    supports: List[str]
    other: List[str]
    majors: List[str]
    created_date: datetime = datetime.now()

    class Config:
        orm_mode = True

class SurveyCreate(SurveyBase):
    pass
