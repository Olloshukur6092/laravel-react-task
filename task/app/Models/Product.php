<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_name',
        'product_type',
        'product_color',
    ];

    public function types()
    {
        return $this->belongsTo(Type::class, 'product_type', 'id');
    }

    public function colors()
    {
        return $this->belongsTo(Color::class, 'product_color', 'id');
    }
}
