from enum import Enum

class EnvironmentKeys(Enum):
    RPC_ENDPOINT = "RPC_ENDPOINT"
    RPC_ENDPOINT_TEST = "RPC_ENDPOINT_TEST"
    MONGO_URI = "MONGO_URI"
    EMAIL = "EMAIL"
    EMAIL_PASSWORD = "EMAIL_PASSWORD"
    OS = "OS"
    ACCESS_TOKEN_EXPIRE_MINUTES = "ACCESS_TOKEN_EXPIRE_MINUTES"
    ALGORITHM = "ALGORITHM"
    SECRET_KEY = "SECRET_KEY"
    OTP_SECRET = "OTP_SECRET"
    BRIDGE_CONTRACT_ADDRESS = "BRIDGE_CONTRACT_ADDRESS"
    VOYAGER_KEY = "VOYAGER_KEY"