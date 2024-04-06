// uploadImages.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        // Generate a unique filename based on the current timestamp and original filename
        const uniqueFilename = `${Date.now()}_${file.originalname}`;
        cb(null, uniqueFilename);
    }
});

// Configure multer with the storage engine
const upload = multer({
    storage: storage
});

// Creating Upload Endpoint for images
router.use('/images', express.static('upload/images'));

// Define the POST route for uploading images
router.post('/upload', upload.array('products', 6), (req, res) => {
    if (!req.files || req.files.length === 0) {
        // No files were uploaded, send an error response
        return res.status(400).json({ success: false, error: 'No images uploaded' });
    }
    // Extract the filenames of the uploaded images and construct image URLs
    const imageUrls = req.files.map(file => ({
        image_url: `http://localhost:${process.env.PORT || 4000}/api/images/${file.filename}`
    }));

    res.json({
        success: true,
        image_urls: imageUrls
    });
});

module.exports = router;
