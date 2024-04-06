import React, { useState } from "react";
import './CSS/Seller.css'
import MainNavbar from "../Components/MainNavbar/MainNavbar";


const Seller = () => {
  const [formData, setFormData] = useState({
    title: "",
    condition: "",
    type: "",
    make: "",
    model: "",
    price: "",
    year: "",
    drive_type: "",
    transmission: "",
    fuel_type: "",
    mileage: "",
    engine_size: "",
    cylinders: "",
    color: "",
    doors: "",
    vin: "",
    description: "",
    safety_features: [],
    videoUrl: "",
    images: [],
    all_features: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSafetyFeaturesChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      safety_features: [...formData.safety_features, value],
    });
  };

  const handleAllFeaturesChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      all_features: [...formData.all_features, value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formData.images.forEach((image) => {
        formDataToSend.append("products", image);
      });
      const uploadResponse = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formDataToSend,
      });
      if (!uploadResponse.ok) {
        throw new Error("Failed to upload images");
      }
      const uploadData = await uploadResponse.json();
      // Extract image URLs from the response
      const imageUrls = uploadData.image_urls.map((imageUrl) => imageUrl.image_url);
      // Append image URLs to formData
      formData.images = imageUrls;
      // Now send other form data to addProduct endpoint
      const productResponse = await fetch("http://localhost:4000/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!productResponse.ok) {
        throw new Error("Failed to upload product");
      }
      alert("Product uploaded successfully!");
      setFormData({
        title: "",
        condition: "",
        type: "",
        make: "",
        model: "",
        price: "",
        year: "",
        drive_type: "",
        transmission: "",
        fuel_type: "",
        mileage: "",
        engine_size: "",
        cylinders: "",
        color: "",
        doors: "",
        vin: "",
        description: "",
        safety_features: [],
        videoUrl: "",
        images: [],
        all_features: [],
      });
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product. Please try again.");
    }
  };

  return (
    <div className="seller">
      <MainNavbar/>
      <div className="seller-main">
        <h1>Upload Product</h1>
        <form onSubmit={handleSubmit}>
          {/* Input fields for product details */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            placeholder="Condition"
          />
           <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Type" />
            <input type="text" name="make" value={formData.make} onChange={handleChange} placeholder="Make" />
            <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Model" />
            <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
            <input type="text" name="year" value={formData.year} onChange={handleChange} placeholder="Year" />
            <input type="text" name="drive_type" value={formData.drive_type} onChange={handleChange} placeholder="Drive Type" />
            <input type="text" name="transmission" value={formData.transmission} onChange={handleChange} placeholder="Transmission" />
            <input type="text" name="fuel_type" value={formData.fuel_type} onChange={handleChange} placeholder="Fuel Type" />
            <input type="text" name="mileage" value={formData.mileage} onChange={handleChange} placeholder="Mileage" />
            <input type="text" name="engine_size" value={formData.engine_size} onChange={handleChange} placeholder="Engine Size" />
            <input type="text" name="cylinders" value={formData.cylinders} onChange={handleChange} placeholder="Cylinders" />
            <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="Color" />
            <input type="text" name="doors" value={formData.doors} onChange={handleChange} placeholder="Doors" />
            <input type="text" name="vin" value={formData.vin} onChange={handleChange} placeholder="VIN" />
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <input type="text" name="videoUrl" value={formData.videoUrl} onChange={handleChange} placeholder="Video URL" />
          <input
            type="text"
            name="safety_features"
            value={formData.safety_features.join(",")}
            onChange={handleSafetyFeaturesChange}
            placeholder="Safety Features"
          />
          <input
            type="text"
            name="all_features"
            value={formData.all_features.join(",")}
            onChange={handleAllFeaturesChange}
            placeholder="All Features"
          />
          <input type="file" name="images" onChange={handleChange} multiple />

          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default Seller;
