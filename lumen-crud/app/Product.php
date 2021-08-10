<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends BaseModel
{
    public $table = 'product';

    protected $fillable = [
        'name','qte','purshasePrice','purchase_id',"category_id",
        "seller_id",'product_id'
    ];
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public static function getAll()
    {
      return self::with('category')->get();
    }
}
