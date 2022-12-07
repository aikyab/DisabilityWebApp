from pydantic import BaseModel
from typing import Optional

class UniversityBase(BaseModel):

    name: str
    logo_file_name: str
    link: str
    uni_type: str
    religious_affiliation: Optional[str]
    state: str
    location: str
    tuition_in_state: str
    tuition_out_state: str
    size: str
    num_ugrad_students: str
    four_years: str
    six_years: str
    black_aa: float
    latinx: float
    aapi: float
    white: float
    mixed_race: float
    unknown: float
    international: float
    ethnicity: Optional[str]
    gender: Optional[str]
    admission_rate: str
    selectivity: str
    gpa_hs: Optional[str]
    act: Optional[str]
    sat_rw_score: str
    sat_math: str
    common_app: str
    tests: str
    essay: str
    recommendations: str
    interview: str
    other: str
    other_notes: Optional[str]
    on_campus_housing_availability: str
    living_learning_communities: str
    on_campus_housing_requirement: str

    class Config:
        orm_mode = True

class UniversityOut(BaseModel):
    id: int

    class Config:
        orm_mode = True

class UniversityMeta(BaseModel):
    id: int
    name: str
    logo_file_name: str

    class Config:
        orm_mode = True
    
class UniversityDetails(UniversityBase):
    pass

class UniversityCreate(UniversityBase):
    pass
