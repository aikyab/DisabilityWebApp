from jose import JWTError, jwt
from datetime import datetime, timedelta
from schemas.users import TokenData
from fastapi import Depends, status, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from database import get_db
from models.users import User
from config import settings

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='auth')

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=settings.access_token_expire_minutes)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.secret_key, algorithm=settings.algorithm)

    return encoded_jwt

def verify_access_token(token: str, credentials_exception):
    try:
        payload = jwt.decode(token, settings.secret_key, algorithms=[settings.algorithm])
        uuid: str = payload.get("uuid")
        if uuid is None:
            raise credentials_exception
        token_data = TokenData(uuid=uuid)

    except JWTError:
        raise credentials_exception
    return token_data

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Your session has expired! Please log in again.", headers={"WWW-Authenticate": "Bearer"})

    token = verify_access_token(token, credentials_exception)
    return db.query(User).filter(User.uuid == token.uuid)
