from pydantic import BaseModel
from datetime import datetime
from uuid import uuid4
from datetime import datetime
from typing import Optional
from pydantic import EmailStr

class UserBase(BaseModel):
    uuid: str = str(uuid4())
    email: EmailStr
    password: str
    first_name: str
    last_name: str
    full_name: str
    age: int
    date_of_birth: datetime
    gender: str
    city: str
    state: str
    school: str
    created_date: datetime = datetime.now()
    phone_number: str

    class Config:
        orm_mode = True

class UserOut(BaseModel):
    uuid: str
    email: EmailStr
    first_name: str
    full_name: str
    age: int
    date_of_birth: datetime
    gender: str
    city: str
    state: str
    school: str
    created_date: datetime
    phone_number: str

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
