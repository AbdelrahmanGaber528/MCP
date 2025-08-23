from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent
SRC_DIR = BASE_DIR / "src"
# model
MODEL_DIR = SRC_DIR / "model"

# data
DATA_DIR = BASE_DIR / "data"
RAW_DATA_DIR = DATA_DIR / "raw"
PROC_DATA_DIR = DATA_DIR / "process"
RAW_DATA =  RAW_DATA_DIR / 'insurance.csv'

# utils
UTIL = SRC_DIR / "utils"

# visuals
VISUAL = SRC_DIR / "visuals"