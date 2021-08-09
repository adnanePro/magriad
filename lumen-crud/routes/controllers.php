<?php


use Illuminate\Support\Facades\Route;

$controllers = [
  ['name' =>'category','except'=>['remove']]
];

function crudRoutes($c)
{
    $prifix=strtolower($c['name']);
    $controller =ucfirst($prifix.'Controller');
   if(!in_array('all',$c['except'])) Route::get("$prifix", "$controller@all");
   if(!in_array('get',$c['except']))Route::get("$prifix/{id}", "$controller@get");
   if(!in_array('add',$c['except']))Route::post("$prifix", "$controller@add");
   if(!in_array('put',$c['except'])) Route::put("$prifix/{id}", "$controller@put");
   if(!in_array('remove',$c['except'])) Route::delete("$prifix/{id}", "$controller@remove");
}