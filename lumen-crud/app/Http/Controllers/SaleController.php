<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\CrudActions;
use App\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    const MODEL = Sale::class;
    use CrudActions;
  
}
