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
        $articles = Article::orderBy('created_at', 'DESC')->paginate(5);
        foreach ($articles as $article) {
            $article->cover_image = config('app.url') . '/api/images/cover_images/' . $article->cover_image ;
        }
        // return Article::paginate(5);
        return response()->json($articles, 200);
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
        // Handle File Upload
        if($request->hasFile('cover_image')){
            // Get filename with the extension
            $filenameWithExt = $request->file('cover_image')->getClientOriginalName();
            // Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('cover_image')->getClientOriginalExtension();
            // Filename to store
            $fileNameToStore = $filename.'_'.time().'.'.$extension;
            // Upload Image
            $path = $request->file('cover_image')->storeAs('public/cover_images', $fileNameToStore);
        } else {
            $fileNameToStore = 'noimage.jpg';
        }
        $article = new Article();
        $article->title = $request->input('title');
        $article->body = $request->input('body');
        $article->cover_image = $fileNameToStore;
        $article->save();
        return response()->json($article, 201);
        // return response()->json("Received", 201);
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
        // return $article;
        $article->cover_image = asset('storage/app/public/cover_images/' . $article->cover_image);
        return response()->json($article, 200);
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
        $article->title = $request->input('title');
        $article->body = $request->input('body');
        $article->save();
        return response()->json($article, 200);
        // return response()->json(['message' => $request], 200);
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
