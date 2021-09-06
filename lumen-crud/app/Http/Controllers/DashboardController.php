<?php

namespace App\Http\Controllers;

use App\Maintenance;
use App\Purchase;
use App\Sale;
use DateTime;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
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
    public function index(){
        $dashboard['SallesAndPurchasesAndMaintenanceByDay']=$this->getSallesAndPurchasesAndMaintenanceByDay();
        $dashboard['statistic'] = $this->statistic();
        return response($dashboard);
    }

    private function getSallesAndPurchasesAndMaintenanceByDay(){
        $dates = [];
        $mounth = $this->request->input('month',1);
        $date_start = new DateTime();
        $date_end = new DateTime();
        $date_start->modify("-$mounth month");
        $interval = [$date_start->format('Y-m-d'), $date_end->format('Y-m-d')];
        $salles_dates = Sale::whereBetween('dateSale',$interval)->select('dateSale')->get();
        foreach ($salles_dates as $sale) {
           array_push($dates,$sale->dateSale);
        }
        $purchases_dates=Purchase::whereBetween('datePurchase',$interval)->select('datePurchase')->get();
        foreach ($purchases_dates as $purchase) {
            array_push($dates,$purchase->datePurchase);
        }
        $maintenans_dates=Maintenance::whereBetween('dateMaintenance',$interval)->select('dateMaintenance')->get();
        foreach ($maintenans_dates as $maintenance) {
            array_push($dates,$maintenance->dateMaintenance);
        }
        $dates = array_unique($dates);
        $index = 0;
        $data= [];
        foreach ($dates as $date) {
            $data[$index]['name'] = $date; 
            $sales = Sale::where('dateSale',$date)->get();
            $sum = 0;
            foreach ($sales as $sale) {
               $sum +=$sale->qte*$sale->price; 
            }
            $data[$index]['sales'] = $sum;
            $purchases = Purchase::where('datePurchase',$date)->get();
            $sum=0;
            foreach ($purchases as $purchase) {
                $sum  += $purchase->charges + $purchase->price;
            }
            $data[$index]['purchases']=$sum;
            $data[$index]['maintenances'] = Maintenance::where('dateMaintenance',$date)->sum('price');
            $index++;
        };
        return $data;
    }
    private function statistic(){
        $data=[];
        $mounth = $this->request->input('month',1);
        $date_start = new DateTime();
        $date_end = new DateTime();
        $date_start->modify("-$mounth month");
        $interval = [$date_start->format('Y-m-d'), $date_end->format('Y-m-d')];
        $benifice=0;
        $sales = Sale::whereBetween('dateSale',$interval)->get();
      
        foreach ($sales as $sale) {

      
            $benifice += $sale->benefice;
        }
        $data['benifice']= $benifice;
        $data['maintenances'] = Maintenance::whereBetween('dateMaintenance',$interval)->sum('price');
        $purchases = Purchase::whereBetween('datePurchase',$interval)->get();
        $sum=0;
        $transport=0;
        foreach ($purchases as $purchase) {
            $sum  +=  $purchase->price;
            $transport  +=  $purchase->charges;
        }
        $data['purchases']=$sum;
        $data['transport']=$transport;
        return $data;
    }



}