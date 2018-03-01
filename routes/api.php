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
Route::post('articles', 'ArticleController@store')->middleware('auth.jwt');

// Update article
Route::put('articles/{article}', 'ArticleController@update')->middleware('auth.jwt');

// Delete article
Route::delete('articles/{article}', 'ArticleController@destroy')->middleware('auth.jwt');

// Get images
Route::get('images/cover_images/{image}', function($image){
	return response()->file(public_path('storage/cover_images/' . $image));
});

// Register
// Route::post('/user', 'UserController@signup'); 

// Sign in
Route::post('/user/signin', 'UserController@signin'); 