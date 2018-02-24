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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List articles
Route::get('articles', 'ArticleController@index');

// List single article
Route::get('articles/{article}', 'ArticleController@show');

// Create new article
Route::post('articles', 'ArticleController@store');

// Update article
Route::put('articles/{article}', 'ArticleController@update');

// Update article
Route::delete('articles/{article}', 'ArticleController@destroy');