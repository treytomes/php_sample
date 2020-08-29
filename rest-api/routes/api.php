<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/genres', array('middleware' => 'cors', 'uses' => 'MovieController@genres'));
Route::get('/genres/{name}', array('middleware' => 'cors', 'uses' => 'MovieController@firstInGenre'));
Route::get('/movies/{id}', array('middleware' => 'cors', 'uses' => 'MovieController@show'));
Route::get('/movies/{id}/next', array('middleware' => 'cors', 'uses' => 'MovieController@next'));

// This one is for serving up movie posters.
Route::get('/resources/images/{filename}', function($filename){
    $path = resource_path() . '/public/images/' . $filename;

    if(!File::exists($path)) {
        return response()->json(['message' => 'Image not found.'], 404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
