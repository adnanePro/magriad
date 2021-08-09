<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends BaseModel
{
    public $table = 'purchase';

    protected $fillable = [
        'datePurchase','transport','fillUp','city',"strip",
    ];
}
