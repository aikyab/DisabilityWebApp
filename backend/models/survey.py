from time import time
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.orm import backref
from .base import Base



class Survey(Base):
    __tablename__ = "survey"
    id = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)
    age = Column(Integer)
    gender = Column(String)
    disability = Column(String)
    created_date = Column(TIMESTAMP(timezone=True))
    user_uuid = Column(String, ForeignKey("users.uuid", ondelete="CASCADE"),nullable=False)
