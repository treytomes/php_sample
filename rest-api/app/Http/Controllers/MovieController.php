<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Movie;
use App\Http\Resources\Movie as MovieResource;
use App\Http\Resources\MovieCollection;

class MovieController extends Controller
{
    public function genres()
    {
        return [ 'data' => [ 'action', 'comedy', 'sci-fi' ] ];
    }

    public function firstInGenre($name)
    {
        if ($name == 'action')
        {
            return redirect()->action('MovieController@show', ['id' => 3]);
        }
        else if ($name == 'comedy')
        {
            return redirect()->action('MovieController@show', ['id' => 1]);
        }
        else if ($name == 'sci-fi')
        {
            return redirect()->action('MovieController@show', ['id' => 5]);
        }
    }

    public function index()
    {
        return new MovieCollection(Movie::all());
    }

    public function show($id)
    {
        return new MovieResource(Movie::findOrFail($id));
    }

    public function next($id)
    {
        if ($id % 2 == 1)
        {
            //return new MovieResource(Movie::findOrFail($id + 1));
            return redirect()->action('MovieController@show', ['id' => $id + 1]);
        }
        else
        {
            //return new MovieResource(Movie::findOrFail($id - 1));
            return redirect()->action('MovieController@show', ['id' => $id - 1]);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $movie = Movie::create($request->all());
        return (new MovieResource($movie))
            ->response()
            ->setStatusCode(201);
    }

    public function delete($id)
    {
        $player = Movie::findOrFail($id);
        $player->delete();
        return response()->json(null, 204);
    }
}
