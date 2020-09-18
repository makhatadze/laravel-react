<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('register',[UserController::class, 'register']);
Route::post('login',[UserController::class, 'login']);
Route::get('profile',[UserController::class, 'getAuthenticatedUser']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});