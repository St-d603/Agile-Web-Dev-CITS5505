# Agile_Sem1_2024_Project

CITS5505 Agile Web Development Project due Sunday, May 19th, 2024.

## TABLE OF CONTENTS

<!-- TABLE OF CONTENTS -->
<details>
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Our Website is all about food! FOODIE HUB is designed to be the one stop shop for all foodies, looking for something to eat? Look no further, the foodie hubs offers a variety of recipes. Looking for a recipe similar to one your Grandma made years ago but don't know where to start? Ask our Foodie hub community to help you discover and remake delicious flavours and meals! How about finding a new favourite place to east? Foodie hub has this recommendation as well!

Foodie Hub offers the chance to interact with like minded and taste-budded people a like. Check us out!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Assessment Criteria

### Front End

The first part of the project assessment will evaluate the front-end functionality of the application:

1. The application must be functional so that the user can easily use the application as intended.
2. The application must be implemented using HTML, CSS and Javascript (or a subset thereof).
3. All resources used (including pictures, JavaScript libraries, css) must be fully referenced.
4. The HTML and CSS must pass the validators: https://validator.w3.org/ and https://jigsaw.w3.org/css-validator/ .
5. The website must work on Chrome, Firefox and Microsoft Edge, and render well on mobile devices.
6. There must be a consistent style (via CSS file) for all pages, yet each page should be easily identifiable.

### Back-end (40%)

The second part of the project assessment evaluates the back-end functionality of the application. At least the following functionality should be provided:

1. A user account and tracking feature.
2. A method to store interactions and results.
3. A method to search previous interactions.

### Agile processes (25%)

The third part of the project assessment will evaluate the Agile process used to create the application. Your Github repo will be used to provide evidence of this, in particular there should be:

1. Regular commits with meaningful messages.
2. Use of issues to discuss bugs, and plan new features.
3. Use of pull requests, with code reviews provided by your group.
4. Intermediate deliverables, pinpointed with Git tags.

To see a more detailed mark scheme, please click on the "Submission" item below, and then click the "View rubric" link on the right of the page.

This will be updated with project details and ideas

### STACK USED

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>

## Local Set-up & Deploying

To run the project locally, first set up a `venv`, then `pip install` `requirements-dev` and then run flask.

```sh
python3 -m venv tmp-env
source tmp-env/bin/activate
pip install -r requirements-dev.txt # (this includes requirements.txt)
flask run
```

If you would like to run with "livereload", run `python local_dev.py` instead of calling `flask run`.
This works well if you are editing HTML/CSS, not so great for editing Python files.

```sh
python local_dev.py
```

When deploying to production, only install `requirements.txt` (don't install `requirements.dev.txt`)

```sh
pip install -r requirements.txt
```
