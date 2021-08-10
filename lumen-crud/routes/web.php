<?php
include('controllers.php');

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


Route::group(['prefix' => 'api'], function () use ($controllers) {

    Route::group(['prefix' => 'user'], function () {
        Route::post("authentification", "UserController@authentification");
    });
    Route::group(['prefix' => 'product'], function () {
        Route::post("get-by-seller-and-purchase", "ProductController@getByPurchaseAndSeller");
    });
    foreach ($controllers as $controller) {
        crudRoutes($controller);
    }
});