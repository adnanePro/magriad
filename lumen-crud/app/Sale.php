<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends BaseModel
{
    public $table = 'sale';
    protected $appends = ['benefice'];
    
    

    public function product(){
        return $this->belongsTo(Product::class);
    }
    public static function getAll()
    {
      return self::with('product')->orderBy('dateSale','DESC')->get();
    }
    public function getBeneficeAttribute(){
        
        return round($this->qte *($this->price-Product::where('id',$this->product_id)->first()->unitPrice),2); 
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
