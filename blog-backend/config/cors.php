<?php

return [
    'paths' => ['*'],
    'allowed_methods' => ['*'],
    // 'allowed_origins' => ['*'],
    'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:5173')],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    // 'supports_credentials' => false,
    'supports_credentials' => true, // laravel share cookie with spa
];