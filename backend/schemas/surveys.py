from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
# from .users import UserOut

class SurveyBase(BaseModel):

    university_type: str
    us_states: List[str]
    geo_setting: Optional[List[str]]
    school_size: List[str]
    selectivity: str
    asl_interpreters: Optional[str]
    note_takers: Optional[str]
    recorded_lectures: Optional[str]
    assist_ldevices: Optional[str]
    course_subwaivers: Optional[str]
    assistive_tech: Optional[str]
    adaptive_equipment: Optional[str]
    preferential_setting: Optional[str]
    alt_text_materials: Optional[str]
    rem_arch_barriers: Optional[str]
    test_acc: Optional[str]
    writing: Optional[str]
    math: Optional[str]
    career_center: Optional[str]
    study_skills: Optional[str]
    tutoring: Optional[str]
    prog_iddstudents: Optional[str]
    summer_bridge: Optional[str]
    social_skills: Optional[str]
    faculty_mentoring: Optional[str]
    peer_mentoring: Optional[str]
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
