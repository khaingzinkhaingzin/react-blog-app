<?php

namespace App\Http;

use Illuminate\Foundation\Configuration\Middleware;

class ApiMiddleware {
    public function __invoke(Middleware $middleware)
    {
        $middleware->api(prepend: [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            // 'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ]);
    }
}