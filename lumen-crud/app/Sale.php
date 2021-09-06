<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends BaseModel
{
    public $table = 'sale';
    protected $appends = ['benefice'];
    
    public static  function inCreating()
    {
        $data = app('request')->all();
        $data['pricePurchase'] = Product::where('id',$data['product_id'])->first()->unitPrice;
        return $data;
    }
    

    public function product(){
        return $this->belongsTo(Product::class);
    }
    public static function getAll()
    {
      return self::with('product')->orderBy('dateSale','DESC')->get();
    }
    public function getBeneficeAttribute(){
        
        return round($this->price - $this->pricePurchase,2);
     }

    protected $fillable = [
        'dateSale','product_id','price','qte','observation','pricePurchase'
    ];
    public  function afterCreate()
    {
        $this->load('product');
        $this->product->qte -= $this->qte;
        $this->product->save();
     }
}
