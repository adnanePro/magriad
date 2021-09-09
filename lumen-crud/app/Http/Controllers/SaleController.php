<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\CrudActions;
use App\Sale;
use Illuminate\Http\Request;
use App\Purchase;

class SaleController extends Controller
{
    const MODEL = Sale::class;
    use CrudActions;
    /**
     * The request instance.
     *
     * @var \Illuminate\Http\Request
     */
    private $request;

    /**
     * Create a new controller instance.
     *
     * @param \Illuminate\Http\Request $request
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
        }


    public function getByPurchase(){
        try {
            $sales = Sale::join('product','product.id','=','sale.product_id')
            ->join('purchase','product.purchase_id','=','purchase.id')
            ->where('purchase.id',$this->request->input('purchase_id'))->select('sale.*')->get();
            foreach ($sales as $sale) {
                $sale->load('product');
            }
            return response($sales, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['status'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
    public function getLastFiveSales(){
        try {
            $sales = Sale::with('product')->orderBy('dateSale','DESC')->limit(5)->get();
            return response($sales, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['status'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
  
}
