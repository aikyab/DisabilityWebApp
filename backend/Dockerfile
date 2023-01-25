FROM python:3.8
WORKDIR /app

# set env variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /app
RUN pip install --no-cache-dir -r /app/requirements.txt

COPY . /app

# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "main:app", "-k", "uvicorn.workers.UvicornWorker"]
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
CMD ["bash","entrypoint.sh"]