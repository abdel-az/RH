FROM python:3.9
ENV PYTHONUNBUFFERED=1
WORKDIR /code
RUN pip install pipenv
COPY Pipfile* ./
RUN pipenv install --dev --system --deploy --ignore-pipfile
COPY . /code/