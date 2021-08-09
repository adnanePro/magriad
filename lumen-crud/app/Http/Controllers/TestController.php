<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Traits\CrudActions;
use App\Test;
use Illuminate\Http\Request;

class TestController extends Controller
{
    const MODEL = Test::class;
    use CrudActions;
}
