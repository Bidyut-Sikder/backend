const { createProductService, ProductListService ,   ProductUpdateService,
    ProductDeleteService,ProductDetailsService, ProductByBrandService, ProductByCategoryService, ProductBySearchService } = require("../services/ProductService")






exports.createProduct = async (req, res) => {

    const result = await createProductService(req)

    res.status(200).json(result)
}







exports.ProductList = async (req, res) => {


    const result = await ProductListService(req)

    res.status(200).json(result)
}





exports.ProductUpdate = async (req, res) => {
    const result = await ProductUpdateService(req)
    return res.status(200).json(result)
}


exports.ProductDelete = async (req, res) => {
    const result = await ProductDeleteService(req)
    return res.status(200).json(result)
}

exports.ProductDetails = async (req, res) => {
    const result = await ProductDetailsService(req)
    return res.status(200).json(result)
}


exports.ProductByBrand = async (req, res) => {
    const result = await ProductByBrandService(req)
    return res.status(200).json(result)
}

exports.ProductByCategory = async (req, res) => {
    const result = await ProductByCategoryService(req)
    return res.status(200).json(result)
}

exports.ProductBySearch = async (req, res) => {
    const result = await ProductBySearchService(req)
    return res.status(200).json(result)
}

