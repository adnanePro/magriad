<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends BaseModel
{
    public $table = 'category';

    protected $fillable = [
        'name'
    ];
}
