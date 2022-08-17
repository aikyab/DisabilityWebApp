from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.base import Base
from routers import user, auth
from database import engine


app = FastAPI()

# Base.metadata.drop_all(engine)
Base.metadata.create_all(engine)

app = FastAPI()

# origins = ["*"]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

app.include_router(user.router)
app.include_router(auth.router)
