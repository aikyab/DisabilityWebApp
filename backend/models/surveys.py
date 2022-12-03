from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.orm import relationship
from database import Base

class Survey(Base):

    __tablename__ = "survey"

    id = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)
    university_type = Column(String)
    us_state = Column(String)
    geo_setting = Column(String)
    school_size = Column(String)
    selectivity = Column(String)
    gpa = Column(Float)
    act = Column(Float)
    sat = Column(Float)
    general_accm = Column(JSON)
    supports = Column(JSON)
    other = Column(JSON)
    majors = Column(JSON)
    created_date = Column(TIMESTAMP(timezone=True))
    user_uuid = Column(String, ForeignKey("users.uuid", ondelete="CASCADE"), nullable=False)
    users = relationship("User", back_populates="survey")
