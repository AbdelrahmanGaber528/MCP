from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DEBUG: bool = True
    API_HOST: str = "0.0.0.0"
    # API_PORT: int = 8000

    # ML/Project settings
    DEFAULT_CONFIDENCE: int = 80
    MAX_AGE: int = 120
    MAX_BMI: float = 60.0
    MAX_CHILDREN: int = 10

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

settings = Settings()
