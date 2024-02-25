const ProductModel = require("../Models/ProductsModel")








exports.createProductService = async (req) => {
    try {

        // console.log(req.body)

        await ProductModel.create(req.body)

        return { status: 'success', message: "product created successfully" }

    } catch (error) {
        console.log(error)
        return { status: 'fail', message: 'something went wrong' }
    }

}






exports.ProductListService = async (req) => {
    try {

        const products = await ProductModel.find()

       
        return ({ status: "success", data: products })
    } catch (error) {
        console.log(error)
        return { status: 'fail', message: 'something went wrong' }
    }

}


exports.ProductDeleteService = async (req) => {
    try {

        const deleteProduct = await ProductModel.deleteOne({ _id: req.params.productId })

        if (deleteProduct.deletedCount === 0) {
            return { status: 'fail', message: 'No data found.' }
        }
        return { status: 'success', message: 'Product deleted successfully!' }
    } catch (error) {
        return { status: 'fail', message: 'somthing went wrong' }
    }
}





exports.ProductUpdateService = async (req) => {
    try {

        const data = await ProductModel.updateOne({ _id: req.params.productId }, { $set: req.body })


        if (data.matchedCount === 0) {
            return { status: 'fail', message: 'No data found.' }

        }

        return { status: 'success', message: 'product updated successfully!' }
    } catch (error) {

        return { status: 'fail', message: 'somthing went wrong' }
    }
}


exports.ProductDetailsService = async (req) => {
    try {

        const data = await ProductModel.findOne({ _id: req.params.productId })


        return { status: 'success', data }
    } catch (error) {

        return { status: 'fail', message: 'somthing went wrong' }
    }
}



exports.ProductByBrandService = async (req) => {

   
    try {
        let data;

        if (req.params.brandName === '0') {

            data = await ProductModel.find()
        }else {
            data = await ProductModel.find({ brand: req.params.brandName })
        }


        return { status: 'success', data }
    } catch (error) {

        return { status: 'fail', message: 'somthing went wrong' }
    }
}






exports.ProductByCategoryService = async (req) => {
    try {

        let data;

        if(req.params.categoryName==='0'){
          data  = await ProductModel.find()
        }else{
            data  = await ProductModel.find({ category: req.params.categoryName })
        }

        return { status: 'success', data }
    } catch (error) {

        return { status: 'fail', message: 'somthing went wrong' }
    }
}

exports.ProductBySearchService = async (req) => {
    try {

        const searchRegex = { "$regex": req.params.searchKeyWord, "$options": "i" }

        const searchParams = [{ name: searchRegex }]

        const searchQuery = { $or: searchParams }

        const matchStage = { $match: searchQuery }

        const data = await ProductModel.aggregate([
            matchStage,


        ])




        return { status: 'success', data }
    } catch (error) {

        return { status: 'fail', message: 'somthing went wrong' }
    }
}










