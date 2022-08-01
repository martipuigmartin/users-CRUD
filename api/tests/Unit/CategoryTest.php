<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Support\Str;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    /**
     * > This function tests the get request to the users route
     */
    public function test_get_users()
    {
        $this->get('/api/users')->assertStatus(200);
    }

    /**
     * We're sending a POST request to the `/api/users` endpoint with a name, email, and password. We're asserting that the
     * status code is 200
     */
    public function test_store_user()
    {
        $this->post('/api/users', [
            'name' => 'test',
            'email' => Str::random(10) . '@testingStoreUser.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        ])->assertStatus(200);
    }

    /**
     * > This function tests that the show user route returns a 200 status code
     */
    public function test_show_user()
    {
        $user = User::first();
        $this->get('/api/users/' . $user->id)->assertStatus(200);
    }

    /**
     * We create a user, then we update it with a random email address and a name of 'test'
     */
    public function test_update_user()
    {
        $user = User::factory()->create();
        $this->put('/api/users/' . $user->id, [
            'name' => 'test',
            'email' => Str::random(10) . '@testingUpdateUser',
        ])->assertStatus(200);
    }

    /**
     * > We create a user, then delete it
     */
    public function test_destroy_user()
    {
        $user = User::factory()->create();
        $this->delete('/api/users/' . $user->id)->assertStatus(200);
    }
}
