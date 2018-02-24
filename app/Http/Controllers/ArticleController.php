<?php

namespace App\Http\Controllers;

use App\Article;
use App\Http\Resources\Article as ArticleResource;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::paginate(5);
        return Article::paginate(5);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $article = Article::create($request->all());
        $article = new Article();
        $article->title = $request->input('title');
        $article->body = $request->input('body');
        $article->save();
        return response()->json($article, 201);
        // return response()->json(['article' => $article], 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        return $article;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        // $article->update($request->all());
        // $article->title = $request->input('title');
        // $article->body = $request->inpute('body');
        // $article->save();
        // return response()->json($article, 200);
        return response()->json(['message' => $request], 200);
        // return response()->json(['article' => $article], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        $article->delete();
        return response()->json(null, 204);
        // return response()->json(['message' => 'Article deleted'], 200);
    }
}
