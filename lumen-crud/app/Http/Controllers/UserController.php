<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
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
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

   

    public function authenticate()
    {
        $this->validate($this->request, [
            'email'  => 'required',
            'password'  => 'required'
        ]);
        // Find the user by email
        $user = User::where('email', $this->request->input('email'))->first();
        // Verify the password and generate the token
        if (Hash::check($this->request->input('password'), $user->password)) {
            return response()->json($user->createToken('users')->accessToken, 200);
        }
        // Bad Request response
        return response()->json([
            'status' => false,
            'error' => 'L\'email ou le mot de passe est incorrect.'
        ], 401);
    }
    public function getUserConnected(){
        return response()->json(auth()->user(), 200);
    }
}
