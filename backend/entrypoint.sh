#!/bin/bash

export APP_MODULE=${APP_MODULE-main:app}
export HOST=${HOST:-0.0.0.0}
export PORT=${PORT:-8000}  # 3

alembic upgrade head

exec gunicorn --bind $HOST:$PORT "$APP_MODULE" -k uvicorn.workers.UvicornWorker  # 5