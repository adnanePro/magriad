<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\CrudActions;
use App\Purchase;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    const MODEL = Purchase::class;
    use CrudActions;
}
