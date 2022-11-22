<?php

namespace App\Services;

use App\Models\Product;

class ProductService
{

    // this constructor Product model connect 
    protected $productModel;
    public function __construct(Product $product)
    {
        $this->productModel = $product->query();
    }

    // this method get all products
    public function indexProductService()
    {
        return $this->productModel->where(['status' => 1])->with(['types', 'colors'])->get();
    }

    // this method add product
    public function storeProductService($productName, $productType, $productColor): void
    {
        
        $this->productModel->create([
            'product_name' => $productName,
            'product_type' => $productType,
            'product_color' => $productColor,
        ]);
    }

    // this method edit product
    public function editProductService($productId)
    {
        return $this->productModel->where(['id' => $productId])->get();
    }

    // this method update
    public function updateProductService($productName, $productType, $productColor, $productId): void
    {
       
        $this->productModel->where(['id' => $productId])->update([
            'product_name' => $productName, 
            'product_type' => $productType,
            'product_color' => $productColor
        ]);;
    }

    // this method delete data
    public function destroyProductService($productId):void
    {
        $this->productModel->where(['id' => $productId])->update(['status' => 0]);
    }
}
