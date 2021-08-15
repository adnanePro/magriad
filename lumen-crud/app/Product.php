<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends BaseModel
{
    public $table = 'product';
    protected $appends = ['percentage','charges'];


    protected $fillable = [
        'name','qte','purshasePrice','purchase_id',"category_id",
        "seller_id",'product_id'
    ];
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function purchase(){
        return $this->belongsTo(Purchase::class);
    }
    public static function getAll()
    {
      return self::with('category')->get();
    }
    public function getPercentageAttribute(){

        return round(($this->purshasePrice/$this->purchase->price)*100,2); 
     }
     public function getChargesAttribute(){

        return  round($this->purchase->charges*$this->percentage/100,2);
     }

}
