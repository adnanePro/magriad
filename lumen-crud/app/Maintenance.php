<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Maintenance extends BaseModel
{
    public $table = 'maintenance';

    public static function getAll()
    {
      return self::with('product')->get();
    }

    protected $fillable = [
        'description','product_id','price',
        'dateMaintenance'
    ];
    public function product(){
        return $this->belongsTo(Product::class);
    }
}
