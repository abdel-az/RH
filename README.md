[//]: <> ( PROJECT SHIELDS )
[![Contributors][contributors-shield]][contributors-url]

[//]: <> ( PROJECT LOGO )
<br />
<p align="center">
  <a href="#">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Gedar</h3>

  <p align="center">
     Digital Archive Project
    <br />
    <a href="https://github.com/Mustapha-Belkacim/gedar"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Mustapha-Belkacim/gedar">View Demo</a>
    ·
    <a href="https://github.com/Mustapha-Belkacim/gedar/issues">Report Bug</a>
    ·
    <a href="https://github.com/Mustapha-Belkacim/gedar/issues">Request Feature</a>
  </p>
</p>

[//]: <> ( TABLE OF CONTENTS )
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#dependency-updates">Dependency Updates</a></li>
  </ol>
</details>


[//]: <> ( ABOUT THE PROJECT )
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

A brief description of the project

### Built With

* [Django](https://www.djangoproject.com/)
* [Angular](https://jquery.com)

[//]: <> ( GETTING STARTED )
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This project depends on `Docker 20.10.5+` and `Docker Compose 1.25.4+`

### Installation

1. Create environment variables
   ```shell
   cp .env/database.env.example .env/database.env
   cp backend/.env.example backend/.env
   ```
2. Build images
   ```shell
   docker-compose build
   ```
3. Run containers
   ```shell
   docker-compose up 
   ```
4. SSH into your app container
   ```sh
   docker-compose exec app bash
   ```
5. Run Migrations
   ```shell
   python manage.py migrate
   ```
6. (optional) Access admin interface
   In order to be able to log into the admin site at `/admin` you have to run
   ```shell
   python manage.py createsuperuser
   ```
   then enter the desired credentials

### Dependency Updates

In a development environment you may want to install development and testing packages as well, run this inside the app container
```shell
pipenv install --dev
```
[//]: <> ( MARKDOWN LINKS & IMAGES )
[//]: <> ( https://www.markdownguide.org/basic-syntax/#reference-style-links )
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/Mustapha-Belkacim/gedar/graphs/contributors
[product-screenshot]: images/screenshot.png