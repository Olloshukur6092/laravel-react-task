<?php

namespace App\Services;

use App\Models\Type;

class TypeService
{
    // this constructor connect type model
    protected $typeModel;
    public function __construct(Type $type)
    {
        $this->typeModel = $type->query();
    }

    // this method get all product types
    public function indexTypeService()
    {
        return $this->typeModel->where(['status' => 1])->get();
    }

    // this method add product type
    public function storeTypeService($type): void
    {
        $this->typeModel->create([
            'type' => $type
        ]);
    }
}
