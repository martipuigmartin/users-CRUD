<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * This function tests the get request to the users route
     */
    public function test_get_users()
    {
        $this->get('/api/users')->assertStatus(200);
    }

    /**
     * We're sending a POST request to the `/api/users` endpoint with a JSON payload containing the required fields for a
     * user
     */
    public function test_store_user()
    {
        $this->post('/api/users', [
            'name' => 'Testing Store User',
            'email' => Str::random(10) . '@example.com',
            'password' => bcrypt(Str::random(10)),
        ])->assertStatus(200);
    }

    /**
     * This function tests that the show user route returns a 200 status code
     */
    public function test_show_user()
    {
        $user = User::first();
        $this->get('/api/users/' . $user->id)->assertStatus(200);
    }

    /**
     * We create a user, then we update it with a random email address, password and a name of 'test'. We're asserting that the status code is 200
     */
    public function test_update_user()
    {
        $user = User::factory()->create();
        $this->put('/api/users/' . $user->id, [
            'name' => 'Testing Update User',
            'email' => Str::random(10) . '@example.com',
            'password' => bcrypt(Str::random(10)),
        ])->assertStatus(200);
    }

    /**
     * We create a user, then delete it
     */
    public function test_destroy_user()
    {
        $user = User::factory()->create();
        $this->delete('/api/users/' . $user->id)->assertStatus(200);
    }
}
