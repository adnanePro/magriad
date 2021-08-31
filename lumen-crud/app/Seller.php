<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Seller extends BaseModel
{
    public $table = 'seller';
    protected $appends = ['lastPurchase'];

    public function getLastPurchaseAttribute(){
        $data = Purchase::join('product','product.purchase_id','=','purchase.id')
                        ->join('seller','seller.id','=','product.seller_id')
                        ->where('seller.id',$this->id)
                        ->latest('purchase.datePurchase')
                        ->first();
                        if($data){
                            return $data->datePurchase;
                        }else{
                            return false;
                        }
    
        }


    protected $fillable = [
        'name','phone','cin','city'
    ];
}
