const express = require("express")
const router = express.Router()
const {uploadImage , downloadImage} = require("../Controllers/image_controller")
const upload = require("../Utils/upload")

router.post("/upload" , upload.single('file') , uploadImage)
router.get("/file/:fileId" , downloadImage)

module.exports = router
    