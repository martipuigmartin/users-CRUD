<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * It returns all the users in the database
     */
    public function index()
    {
        return User::all();
    }

    /**
     * This function will return a user with the given id
     */
    public function show($id)
    {
        return User::findOrFail($id);
    }

    /**
     * The update function takes a request and an id, finds the user with that id, and updates the user with the request
     * data
     */
    public function update(Request $request, $id)
    {
        /* Checking if the email already exists in the database */
        if (User::where('email', $request->email)->where('id', '!=', $id)->exists()) {
            return response()->json(['error' => 'Email already exists'], 400);
        }

        $user = User::find($id);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
    }

    /**
     * The function takes an id, finds the user with that id, and deletes the user
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
    }
}
