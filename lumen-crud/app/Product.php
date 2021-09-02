<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends BaseModel
{
    public $table = 'product';
    protected $appends = ['percentage','charges','unitPrice','maintenanceCost','quantityIniale'];
    protected $primaryKey = 'id';


    protected $fillable = [
        'name','qte','purshasePrice','purchase_id',"category_id",
        "seller_id",'product_id'
    ];
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function maitenances(){
        return $this->hasMany(Maintenance::class);

    }
    public function sales(){
        return $this->hasMany(Sale::class);

    }
    public function purchase(){
        return $this->belongsTo(Purchase::class);
    }
    public function seller(){
        return $this->belongsTo(Seller::class);
    }
    public static function getAll()
    {
      return self::with('category')->get();
    }
    public function getQuantityInialeAttribute(){

        return $this->qte + $this->sales->sum('qte'); 
     }
     public function getunitPriceAttribute(){
         return round((($this->charges+$this->maintenanceCost)/$this->quantityIniale)+$this->purshasePrice,2); 
        }
        public function getPercentageAttribute(){
            
        
        return round((($this->purshasePrice*$this->quantityIniale)/$this->purchase->price)*100,2); 
     }
     public function getChargesAttribute(){
     

        return  round(($this->purchase->charges*$this->percentage/100),2);
     }
     public function getMaintenanceCostAttribute(){

        return  $this->maitenances->sum('price');
     }
     public function scopeInStock($query){
         return $query->where('qte','!=',0);
     }
     public function getTotal(){
         return $this->quantityIniale*$this->purshasePrice;
     }

}
