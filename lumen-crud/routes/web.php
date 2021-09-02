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
$router->get('/test','TestController@getByPurchase');

Route::group(['prefix' => 'api'], function () use ($controllers) {

    Route::group(['prefix' => 'user'], function () {
        Route::post("authentification", "UserController@authentification");
    });
    Route::group(['prefix' => 'maintenance'], function () {
        Route::post("get-by-purchase", "MaintenanceController@getByPurchase");
    });
    Route::group(['prefix' => 'sale'], function () {
        Route::post("get-by-purchase", "SaleController@getByPurchase");
    });

    Route::group(['prefix' => 'product'], function () {
        Route::post("get-by-seller-and-purchase", "ProductController@getByPurchaseAndSeller");
        Route::get("get-product-in-stock", "ProductController@getProductInStock");
    });
    foreach ($controllers as $controller) {
        crudRoutes($controller);
    }
});