# Pull base image
FROM python:3.7

WORKDIR /app/

COPY ./requirements.txt /app/
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
COPY . /app

EXPOSE 8000