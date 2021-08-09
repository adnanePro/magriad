<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Controllers\Traits\CrudActions;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    const MODEL = Category::class;
    use CrudActions;
}
