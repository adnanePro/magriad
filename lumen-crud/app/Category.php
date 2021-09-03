<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends BaseModel
{
    public $table = 'category';

    protected $appends = ['value','lastPurchase','lastSale','qte'];


  public static function getAll()
  {
    return self::withCount('products')->get();
  }

    public function getValueAttribute(){
        return $this->products->sum(function($product){
            return $product->qte * $product->purshasePrice;
        });

    }
    public function getQteAttribute(){
        return $this->products->sum('qte');

    }
    public function getLastSaleAttribute(){
        $data = Sale::join('product','product.id','=','sale.product_id')
                    ->join('category','category.id','=','product.category_id')
                    ->where('category.id',$this->id)
                    ->latest('sale.dateSale')
                    ->first();
        if($data){
            return $data->dateSale;
        }else{
            return false;
        }

    }
    public function getLastPurchaseAttribute(){
    $data = Purchase::join('product','product.purchase_id','=','purchase.id')
                    ->join('category','category.id','=','product.category_id')
                    ->where('category.id',$this->id)
                    ->latest('purchase.datePurchase')
                    ->first();
                    if($data){
                        return $data->datePurchase;
                    }else{
                        return false;
                    }

    }
    public function products(){
        return $this->hasMany(Product::class)->inStock();
    }

    protected $fillable = [
        'name'
    ];
}
