from pydantic import BaseModel
from datetime import datetime
from uuid import uuid4
from datetime import datetime
from typing import Optional
from pydantic import EmailStr

class UserBase(BaseModel):
    uuid: str
    email: EmailStr
    password: str
    full_name: str
    date_of_birth: datetime
    created_date: datetime

    class Config:
        orm_mode = True

class UserOut(BaseModel):
    uuid: str

    class Config:
        orm_mode = True

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UpdatePassword(BaseModel):
    old_password: str
    new_password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    uuid: Optional[str] = None

class UserCreate(UserBase):
    pass
