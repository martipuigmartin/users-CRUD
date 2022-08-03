<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * It creates a new user, creates a token for that user, and returns the user and the token
     */
    public function register(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user) {
            return response()->json(['error' => 'User already exists'], 400);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer'], 200);
    }

    /**
     * If the user's credentials are valid, create a token and return it to the user
     */
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
            'message' => 'Hello ' . $user->name . '!'
        ]);
    }

    /**
     * It deletes all the tokens associated with the user
     */
    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json(['message' => 'Successfully logged out and deleted the token'], 200);
    }
}
