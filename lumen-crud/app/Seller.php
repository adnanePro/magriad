<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Seller extends BaseModel
{
    public $table = 'seller';

    protected $fillable = [
        'name','phone','cin','city'
    ];
}
