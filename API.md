# API documentation

Rest API at localhost:8000.

## Get a list of genres.

**URL:** /genres

**Method:** GET

**Content example:**
```
{
    "data": [
        "action",
        "comedy",
        "sci-fi"
    ]
}
```

## Get the first movie in a genre.

**URL:** /genres/:name

**URL Parameters:** name=\[string\], one of 'action', 'comedy', or 'sci-fi'.

**Method:** GET

**Content example:** 
```
{
    "data": {
        "id": 3,
        "name": "Gemini Man",
        "genre": "action",
        "description": "Henry Brogan is an elite 51-year-old assassin who's ready to call it quits after completing his 72nd job. His plans get turned upside down when he becomes the target of a mysterious operative who can seemingly predict his every move. To his horror, Brogan soon learns that the man who's trying to kill him is a younger, faster, cloned version of himself.",
        "photo": "gemini_man.jpg",
        "created_at": "2020-08-29T00:00:00.000000Z",
        "updated_at":"2020-08-29T00:00:00.000000Z"
    }
}
```

## Get movie details by id.

**URL:** /movies/:id

**URL Parameters:** id=\[integer\], the primary key of the movie in sample.sqlite.

**Method:** GET

**Content example:**
```
{
    "data": {
        "id": 3,
        "name": "Gemini Man",
        "genre": "action",
        "description": "Henry Brogan is an elite 51-year-old assassin who's ready to call it quits after completing his 72nd job. His plans get turned upside down when he becomes the target of a mysterious operative who can seemingly predict his every move. To his horror, Brogan soon learns that the man who's trying to kill him is a younger, faster, cloned version of himself.",
        "photo": "gemini_man.jpg",
        "created_at": "2020-08-29T00:00:00.000000Z",
        "updated_at":"2020-08-29T00:00:00.000000Z"
    }
}
```

## Get the next movie in a genre.

**URL:** /movies/:id/next

**URL Parameters:** id=\[integer\], the primary key of the movie in sample.sqlite.

**Method:** GET

**Content example:** 
```
{
    "data": {
        "id": 3,
        "name": "Gemini Man",
        "genre": "action",
        "description": "Henry Brogan is an elite 51-year-old assassin who's ready to call it quits after completing his 72nd job. His plans get turned upside down when he becomes the target of a mysterious operative who can seemingly predict his every move. To his horror, Brogan soon learns that the man who's trying to kill him is a younger, faster, cloned version of himself.",
        "photo": "gemini_man.jpg",
        "created_at": "2020-08-29T00:00:00.000000Z",
        "updated_at":"2020-08-29T00:00:00.000000Z"
    }
}
```
