<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends BaseModel
{
    public $table = 'purchase';
    protected $appends = ['price','charges'];

    protected $fillable = [
        'datePurchase','transport','fillUp','city',"strip",
    ];
    public static function getAll()
    {
      return self::with('products')->get();
    }

    public function products(){
        return $this->hasMany(Product::class)->with('maitenances');
    }
    public static function getById($id)
    {
        return self::where('id',$id)->with('sellers')->first();

    }
    public function sellers(){
        return $this->belongsToMany(Seller::class,Product::class)->distinct();
    }
    public function getPriceAttribute(){

        return $this->products()->sum('purshasePrice');
     }
     public function getChargesAttribute(){
        return $this->fillUp + $this->transport + $this->strip;

     }
}
