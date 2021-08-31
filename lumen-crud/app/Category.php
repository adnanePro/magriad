<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends BaseModel
{
    public $table = 'category';

    protected $appends = ['value','lastPurchase'];


  public static function getAll()
  {
    return self::withCount('products')->get();
  }

    public function getValueAttribute(){
        return $this->products->sum('purshasePrice');

    }
    public function getLastPurchaseAttribute(){
    return Purchase::join('product','product.purchase_id','=','purchase.id')
                    ->join('category','category.id','=','product.category_id')
                    ->where('category.id',$this->id)
                    ->latest('purchase.datePurchase')
                    ->first()->datePurchase;

    }
    public function products(){
        return $this->hasMany(Product::class)->inStock();
    }

    protected $fillable = [
        'name'
    ];
}
