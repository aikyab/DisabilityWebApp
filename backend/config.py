from pydantic import BaseSettings


class Settings(BaseSettings):
    postgres_db_dsn: str
    secret_key: str
    algorithm: str
    access_token_expire_minutes: int

    class Config:
        env_file = ".env"


settings = Settings()