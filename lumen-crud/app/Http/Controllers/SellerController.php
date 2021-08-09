<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\CrudActions;
use Illuminate\Http\Request;
use App\Seller;
class SellerController extends Controller
{
    const MODEL = Seller::class;
    use CrudActions;
}
