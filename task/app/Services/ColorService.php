<?php

namespace App\Services;

use App\Models\Color;

class ColorService 
{
    // this constructor connect color model
    protected $colorModel;
    public function __construct(Color $color)
    {
        $this->colorModel = $color->query();
    }

    // this method get colors
    public function indexColorService()
    {
        return $this->colorModel->where(['status' => 1])->get();
    }

    // this method add color
    public function storeColorService($color) :void
    {
        $this->colorModel->create([
            'color' => $color,
        ]);
    }
}