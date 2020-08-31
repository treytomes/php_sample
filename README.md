# php_sample
A single page app that calls a Rest API web service and returns data to a frontend built in ReactJS.

Technologies:
* [Laravel (5.8)](https://laravel.com/)
    * Using v5.8.35.
* [PHP (7.1.*)](https://www.php.net/)
* [ReactJS](https://reactjs.org/)
* etc.

# Requirements
* API call must return text and an image
*  UI React components and must include:
    * Dropdown that specifies a movie genre (comedy, sci-fi, action)
        * Button to activate the web service call based on choice
        * Display text about the movie choice
        * Display image of a movie in that genre
    * Each genre must have 2 different movies
    * If the user selects the same movie genre, then the other movie will be returned instead
of the current one shown.

# How to run

**Prerequisites:** I am going to assume you already have PHP, Composer, and npm installed.

1. Clone this repository to somewhere local.
2. Change the DB_DATABASE variable in ./rest_api/.env to the full path to your copy of ./rest-api/database/sample.sqlite.
3. Run `composer install` in a console window from ./rest_api.
4. Run `php artisan serve` in a console window from ./rest_api.
    * This should start the api client at http://localhost:8000.
5. Run `npm start` in a console window from ./movies-web-client-react.
    * This should start the ui client at localhost:3000.
6. You should now be able to direct your browser to http://localhost:3000.

It should look something like this:

![](/screenshots/screenshot001.png)

## Notes

* The Cors plumbing was necessary to get the Rest API at localhost:8000 to talk to the React UI at localhost:3000.
* No version number was specified in the requirements for ReactJS, so I'm using the latest.
* The guide I was following wanted me to use yarn.  This is probably a great idea, but WSL isn't getting along with yarn right now.  I ended up using npm instead.
* The movie posters are technically part of the data, so they get stored with the api.  Had to create a special Laravel route just for serving up images.
* Wasn't clear from the requirements if the image returned from the api needed to be a complete base-64 encoded image, or if I could simply return an url.  Returning the url is a lot simpler.
* **Disclaimer: The movies selected for this sample do not necessarily reflect the tastes of the developer.**

# References

* [This](https://developer.okta.com/blog/2018/12/06/crud-app-laravel-react) tutorial was useful in getting started.  I left off the authentication bits, and most of the second half of the React tutorial once I got the hang of how it works.
