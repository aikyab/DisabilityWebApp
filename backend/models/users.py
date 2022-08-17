from contextlib import nullcontext
from time import time
from sqlalchemy import Column, Integer, String, Boolean, DATETIME
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP
from .base import Base



class User(Base):
    __tablename__ = "users"
    uuid = Column(String, primary_key=True, index=True, nullable=False)
    email = Column(String, nullable=False, index=True)
    password = Column(String, nullable=False)
    first_name = Column(String)
    last_name = Column(String)
    full_name = Column(String)
    age = Column(Integer)
    date_of_birth = Column(TIMESTAMP)
    gender = Column(String)
    city = Column(String)
    state = Column(String)
    school = Column(String, nullable=True)
    created_date = Column(TIMESTAMP(timezone=True))
