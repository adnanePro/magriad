<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\CrudActions;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    const MODEL = Product::class;
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

    public function getByPurchaseAndSeller(){
        try {
            $products = Product::where('purchase_id', $this->request->input('purchase_id'))
                                ->where('seller_id',$this->request->input('seller_id'))->with('category')->get();
            
            return response($products, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['status'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
    public function getProductInStock(){
        try {
            $products = Product::inStock()->with('category','purchase','seller')->get();
            
            return response($products, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['status'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
}
