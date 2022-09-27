const mongoose = require('mongoose')
const Category = mongoose.model('Category')

exports.getCategory = async () =>{
    const result = await Category.find({}, 'categoryName active _id')
    
    return result
}

exports.create = async(data)=> {
    const categoria = Category(data)
    await categoria.save()
}

exports.put = async(id, data) =>{
    await Category.findByIdAndUpdate(id, {
        $set:{
            categoryName: data.categoryName,
            active: data.active
        }
    })
}

exports.getById = async(id) =>{
    const result = await Category.findOne({_id: id}, "_id categoryName active")
    return result
}

exports.delete = async(id) =>{
    await Category.findByIdAndUpdate(id,{
        $set:{
            active:false
        }
    })
}