# Import all the models, so that Base has them before being
# imported by Alembic
from database import Base  # noqa
from .users import User  # noqa
from .surveys import Survey  # noqa
from .university import University  # noqa