<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends BaseModel
{
    public $table = 'sale';

    public function product(){
        return $this->belongsTo(Product::class);
    }
    public static function getAll()
    {
      return self::with('product')->get();
    }

    protected $fillable = [
        'dateSale','product_id','price','qte','observation'
    ];
    public  function afterCreate()
    {
        $this->load('product');
        $this->product->qte -= $this->qte;
        $this->product->save();
     }
}
