<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends BaseModel
{
    public $table = 'purchase';
    protected $appends = ['price','charges','percentage','maintenance'];

    protected $fillable = [
        'datePurchase','transport','fillUp','city',"strip",
    ];
    public static function getAll()
    {
      return self::with('products')->orderBy('datePurchase','DESC')->get();
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
      $products = Product::where('purchase_id',$this->id)->get();
      $price=0;
      foreach ($products as $product) {
        $price += $product->getTotal();
      }
      return $price;
     }
     public function getChargesAttribute(){
        return $this->fillUp + $this->transport + $this->strip;

        
     }
     public function scopeSaleByPurchase($query){
        return $query->join('product','product.purchase_id','=','purchase.id')
                     ->join('sale','sale.product_id','=','product.id')
                     ->where('purchase.id',$this->id);
    }
     public function getPercentageAttribute(){
         
         $query = Product::where('purchase_id',$this->id);
         $allProduct = 0;
         foreach ($query->get() as $product) {
             $allProduct += $product->quantityIniale;
         }
         error_log($allProduct);
         $productsSallers = $this->saleByPurchase()->sum('sale.qte');
         return $allProduct===0 ? 0 : round((($productsSallers)/$allProduct)*100,2);
     }
     public function getMaintenanceAttribute(){
        return $this->join('product','product.purchase_id','=','purchase.id')
                    ->join('maintenance','maintenance.product_id','product.id')
                    ->where('purchase.id',$this->id)
                    ->sum('maintenance.price');
     }
}
