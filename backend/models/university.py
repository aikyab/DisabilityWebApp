from sqlalchemy import Column, Integer, String, Float
# from sqlalchemy.dialects.postgresql import JSON
from database import Base

class University(Base):

    __tablename__ = "university"

    id = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)

    name = Column(String, nullable=False)
    logo_file_name = Column(String, nullable=False)
    link = Column(String, nullable=False)
    uni_type = Column(String, nullable=False)
    religious_affiliation = Column(String, nullable=True)
    state = Column(String, nullable=False)
    location = Column(String, nullable=False)
    tuition_in_state = Column(String, nullable=False)
    tuition_out_state = Column(String, nullable=False)
    size = Column(String, nullable=False)
    num_ugrad_students = Column(String, nullable=False)
    four_years = Column(String, nullable=False)
    six_years = Column(String, nullable=False)
    black_aa = Column(Float, nullable=False)
    latinx = Column(Float, nullable=False)
    aapi = Column(Float, nullable=False)
    white = Column(Float, nullable=False)
    mixed_race = Column(Float, nullable=False)
    unknown = Column(Float, nullable=False)
    international = Column(Float, nullable=False)
    ethnicity = Column(String, nullable=True)
    gender = Column(String, nullable=True)
    admission_rate = Column(String, nullable=False)
    selectivity = Column(String, nullable=False)
    gpa_hs = Column(String, nullable=True)
    act = Column(String, nullable=True)
    sat_rw_score = Column(String, nullable=False)
    sat_math = Column(String, nullable=False)
    common_app = Column(String, nullable=False)
    tests = Column(String, nullable=False)
    essay = Column(String, nullable=False)
    recommendations = Column(String, nullable=False)
    interview = Column(String, nullable=False)
    other = Column(String, nullable=False)
    other_notes = Column(String, nullable=True)
    on_campus_housing_availability = Column(String, nullable=False)
    living_learning_communities = Column(String, nullable=False)
    on_campus_housing_requirement = Column(String, nullable=False)