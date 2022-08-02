<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Support\Str;
use Tests\TestCase;

class UserTest extends TestCase
{
    public function test_get_users()
    {
        $user = User::factory()->create();
        $user->save();
        $this->actingAs($user)->get('/api/users')->assertStatus(200);
        $user->delete();
    }

    public function test_get_users_without_authentication()
    {
        $this->get('/api/users')->assertStatus(500);
    }

    public function test_show_user()
    {
        $user = User::count() > 0 ? User::first() : User::factory()->create();

        $this->actingAs($user)->get('/api/users/' . $user->id)->assertStatus(200);

        if (User::count() == 1) {
            $user->delete();
        }
    }

    public function test_show_user_without_authentication()
    {
        $user = User::count() > 0 ? User::first() : User::factory()->create();

        $this->get('/api/users/' . $user->id)->assertStatus(500);

        if (User::count() == 1) {
            $user->delete();
        }
    }

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

    public function test_destroy_user()
    {
        $user = User::factory()->create();
        $this->actingAs($user)->delete('/api/users/' . $user->id)->assertStatus(200);
    }

    public function test_destroy_user_without_test_update_user_without_authentication()
    {
        $user = User::factory()->create();
        $this->delete('/api/users/' . $user->id)->assertStatus(500);
        $user->delete();
    }
}
