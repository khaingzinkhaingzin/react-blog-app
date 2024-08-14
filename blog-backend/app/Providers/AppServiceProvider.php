<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Schema\Blueprint;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Blueprint::macro('commonColumns', function () {
            $this->unsignedBigInteger('created_by')->nullable();
            $this->unsignedBigInteger('updated_by')->nullable();
            
            // Assuming you have foreign keys referencing the users table
            $this->foreign('created_by')->references('id')->on('users')->onDelete('set null');
            $this->foreign('updated_by')->references('id')->on('users')->onDelete('set null');
        });
    }
}
