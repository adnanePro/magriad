<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

abstract class BaseModel extends Model
{
  public static  $rules = [];

  public static function getAll()
  {
    return self::all();
  }

  public static  function inCreating()
  {
    return app('request')->all();
  }
  public  function afterCreate()
  {
    
  }
}
