const fileSchema = require("../Models/file")



const uploadImage = async (req , res)=>{
    const fileObj = {
        path :req.file.path,
        name :req.file.originalname
    }
   try {
    const file = await fileSchema.create(fileObj)
    res.status(200).json({
        path:`http://localhost:8000/file/${file._id}`
    })
   } catch (error) {
    res.status(500).json({
        message:error.message
    })
   }

}

const downloadImage = async (req, res)=>{
try {
   let file = await fileSchema.findById(req.params.fileId) 
   file.downloadContent++;
    await  file.save();
    res.download(file.path , file.name)
    
}
catch{
    return res.status(500).json({
        message:error.message
    })
}
}

module.exports={
    uploadImage,
    downloadImage
}