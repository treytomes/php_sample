# php_sample
A single page app that calls a Rest API web service and returns data to a frontend built in ReactJS.

Technologies:
* [Laravel (5.8)](https://laravel.com/)
    * Using v5.8.35.
* [PHP (7.1.*)](https://www.php.net/)
* [ReactJS](https://reactjs.org/)
* etc.

## Requirements
* API call must return text and an image
*  UI React components and must include:
    * Dropdown that specifies a movie genre (comedy, sci-fi, action)
        * Button to activate the web service call based on choice
        * Display text about the movie choice
        * Display image of a movie in that genre
    * Each genre must have 2 different movies
    * If the user selects the same movie genre, then the other movie will be returned instead
of the current one shown.

## How to run

1. Change the DB_DATABASE variable in ./rest_api/.env to the full path to your copy of ./rest-api/database/sample.sqlite.
2. In ./rest-api, run `php artisan serve`.
    * This should start the api client at localhost:8000.
3. In ./movies-web-client-react, run `npm start`.
    * This should start the ui client at localhost:3000.



## API documentation

## Model

Movie properties:
id: integer
name: string
genre: string
photo: string(url)

## Notes

* The Cors plumbing didn't seem to be necessary for the local run context, so I left it out.
* No version number was specified in the requirements for ReactJS
* The guide I was following wanted me to use yarn.  WSL was giving me a headache with GPG errors, so I used npm instead.
* The movie posters are technically part of the data, so they get stored with the api.  Had to create a special route just for serving up images.
* Wasn't clear from the requirements if the image returned from the api needed to be a complete base-64 encoded image, or if I could simply return an url.  Returning the url is a lot simpler.