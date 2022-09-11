from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import TIMESTAMP
from database import Base



class User(Base):
    __tablename__ = "users"
    uuid = Column(String, primary_key=True, nullable=False)
    email = Column(String, unique=True, nullable=False, index=True)
    password = Column(String, nullable=False)
    full_name = Column(String)
    date_of_birth = Column(TIMESTAMP)
    created_date = Column(TIMESTAMP(timezone=True))
    survey = relationship("Survey", back_populates="users")
