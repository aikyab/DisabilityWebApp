from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.orm import relationship
from database import Base


class Survey(Base):
    __tablename__ = "survey"
    id = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)
    age = Column(Integer)
    gender = Column(String)
    disability = Column(String)
    created_date = Column(TIMESTAMP(timezone=True))
    user_uuid = Column(String, ForeignKey("users.uuid", ondelete="CASCADE"),
    unique=True, nullable=False)
    users = relationship("User", back_populates="survey", uselist=False)
