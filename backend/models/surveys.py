from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.orm import relationship
from database import Base

class Survey(Base):

    __tablename__ = "survey"

    id = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)
    university_type = Column(String, nullable=False)
    us_states = Column(JSON,nullable=False)
    geo_setting = Column(String, nullable=False)
    school_size = Column(JSON, nullable=False)
    selectivity = Column(String, nullable=False)
    asl_interpreters: Column(String)
    note_takers: Column(String)
    recorded_lectures: Column(String)
    assist_ldevices: Column(String)
    course_subwaivers: Column(String)
    assistive_tech: Column(String)
    adaptive_equipment: Column(String)
    preferential_setting: Column(String)
    alt_text_materials: Column(String)
    rem_arch_barriers: Column(String)
    test_acc: Column(String)
    writing: Column(String)
    math: Column(String)
    career_center: Column(String)
    study_skills: Column(String)
    tutoring: Column(String)
    prog_iddstudents: Column(String)
    summer_bridge: Column(String)
    social_skills: Column(String)
    faculty_mentoring: Column(String)
    peer_mentoring: Column(String)
    created_date = Column(TIMESTAMP(timezone=True))
    user_uuid = Column(String, ForeignKey("users.uuid", ondelete="CASCADE"), nullable=False)
    users = relationship("User", back_populates="survey")
