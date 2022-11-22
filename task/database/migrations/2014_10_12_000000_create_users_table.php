<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->tinyInteger('role')->default(0);
            $table->rememberToken();
            $table->timestamps();
        });

        DB::table('users')->insert([
           ['name' => 'John', 'email' => 'john@gmail.com', 'password' => bcrypt(123456), 'role' => 0],
           ['name' => 'Admin', 'email' => 'admin@gmail.com', 'password' => bcrypt('admin00'), 'role' => 1],
           ['name' => 'Julia', 'email' => 'juli@gmail.com', 'password' => bcrypt(123456), 'role' => 0],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
