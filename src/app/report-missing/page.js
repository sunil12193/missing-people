"use client";
import { useState } from "react";

export default function MissingPersonForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    description: "",
    contact: "",
    contactName: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection + preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Upload image to Cloudinary
  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "YOUR_UPLOAD_PRESET");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = "";
    if (image) {
      imageUrl = await uploadImage();
    }

    const finalData = {
      ...formData,
      image: imageUrl,
    };

    console.log(finalData); // send this to backend

    setLoading(false);
    alert("Form Submitted Successfully 🚀");
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-22 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Report Missing Person</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        {/* Gender */}
        <div>
          <p className="font-semibold">Gender:</p>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="gender" value="male" onChange={handleChange} required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" onChange={handleChange} /> Other
            </label>
          </div>
        </div>

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Last Seen Location"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        {/* Contact */}
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactName"
          placeholder="Contact Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        {/* Image Upload */}
        <div>
          <p className="font-semibold">Upload Image:</p>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {/* Preview */}
        {preview && (
          <div>
            <img src={preview} alt="preview" className="w-32 h-32 object-cover rounded" />
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded cursor-pointer "
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Report 🚨"}
        </button>

      </form>
    </div>
  );
}