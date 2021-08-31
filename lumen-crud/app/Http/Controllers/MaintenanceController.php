<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\CrudActions;
use App\Maintenance;
use Illuminate\Http\Request;

class MaintenanceController extends Controller
{
    const MODEL = Maintenance::class;
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
            $maintenance = Maintenance::join('product','product.id','=','maintenance.product_id')
                                   ->join('purchase','purchase.id','=','product.purchase_id')
                                   ->where('purchase.id',$this->request->input('purchase_id'))
                                   ->with('product')
                                   ->select('maintenance.*','product.id')
                                   ->get();
            
            return response($maintenance, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['status'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }
}
