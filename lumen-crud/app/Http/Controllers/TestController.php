<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\CrudActions;
use App\Maintenance;
use App\Purchase;
use App\Test;
use Illuminate\Http\Request;

class TestController extends Controller
{
    const MODEL = Test::class;
    use CrudActions;

    public function test(){
        return response(Purchase::all());
    }
}
