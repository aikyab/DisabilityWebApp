from sys import prefix
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import user, auth, survey, university
from database import Base
from database import engine


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router,prefix="/users")
app.include_router(auth.router,prefix="/auth")
app.include_router(survey.router,prefix="/surveys")
app.include_router(university.router,prefix="/university")

@app.get("/")
async def main():
    return {"message": "Hello World changed"}
