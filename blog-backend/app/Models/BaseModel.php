<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    protected $fillable = [
        'created_by',
        'updated_by',
        'deleted_at',
    ];
}
