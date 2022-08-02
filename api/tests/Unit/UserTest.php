<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Support\Str;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * It creates a user, saves it, then checks to see if the user can access the /api/users route
     */
    public function test_get_users()
    {
        $user = User::factory()->create();
        $user->save();
        $this->actingAs($user)->get('/api/users')->assertStatus(200);
        $user->delete();
    }

    /**
     * This function tests that the `/api/users` route returns a 500 status code when the user is not authenticated
     */
    public function test_get_users_without_authentication()
    {
        $this->get('/api/users')->assertStatus(500);
    }

    /**
     * This function tests that a user can view their own profile
     */
    public function test_show_user()
    {
        $user = User::count() > 0 ? User::first() : User::factory()->create();

        $this->actingAs($user)->get('/api/users/' . $user->id)->assertStatus(200);

        if (User::count() == 1) {
            $user->delete();
        }
    }

    /**
     * Test that a user cannot be shown without authentication
     */
    public function test_show_user_without_authentication()
    {
        $user = User::count() > 0 ? User::first() : User::factory()->create();

        $this->get('/api/users/' . $user->id)->assertStatus(500);

        if (User::count() == 1) {
            $user->delete();
        }
    }

    /**
     * We create a user, then we use the `actingAs` method to authenticate the user, then we use the `put` method to update
     * the user, and finally we assert that the status code is 200
     */
    public function test_update_user()
    {
        $user = User::factory()->create();

        $this->actingAs($user)->put('/api/users/' . $user->id, [
            'name' => 'Testing Update User',
            'email' => Str::random(10) . '@example.com',
            'password' => bcrypt(Str::random(10)),
        ])->assertStatus(200);

        $user->delete();
    }

    /**
     * We're trying to update a user without authentication
     */
    public function test_update_user_without_authentication()
    {
        $user = User::factory()->create();

        $this->put('/api/users/' . $user->id, [
            'name' => 'Testing Update User',
            'email' => Str::random(10) . '@example.com',
            'password' => bcrypt(Str::random(10)),
        ])->assertStatus(500);

        $user->delete();
    }

    /**
     * We create a user, log in as that user, and then delete that user
     */
    public function test_destroy_user()
    {
        $user = User::factory()->create();
        $this->actingAs($user)->delete('/api/users/' . $user->id)->assertStatus(200);
    }

    /**
     * This function tests that a user can't delete another user without authentication
     */
    public function test_destroy_user_without_test_update_user_without_authentication()
    {
        $user = User::factory()->create();
        $this->delete('/api/users/' . $user->id)->assertStatus(500);
        $user->delete();
    }
}
