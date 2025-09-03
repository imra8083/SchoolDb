import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss";

function AddSchool() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    contactNumber: "",
    email: "",
    imageFile: null, // must match the uploaded file
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("address", formData.address);
      data.append("city", formData.city);
      data.append("contactNumber", formData.contactNumber);
      data.append("email", formData.email);
      data.append("imageFile", formData.imageFile);

     /* const res = await axios.post("http://localhost:3000/api/addschool", data, {
        headers: { "Content-Type": "multipart/form-data" },
      }); */
      const res = await axios.post(
  `${import.meta.env.VITE_API_BASE_URL}/api/addschool`,
  data,
  { headers: { "Content-Type": "multipart/form-data" } }
);


      toast.success(res.data.message || "✅ School added successfully");

      setFormData({
        name: "",
        address: "",
        city: "",
        contactNumber: "",
        email: "",
        imageFile: null,
      });
    } catch (error) {
  const backendMessage =
    error.response?.data?.error || error.response?.data?.message || error.message;
  toast.error(backendMessage);
}
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Add School
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="School Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />

          <div className="w-full">
            <label className="block mb-1 text-gray-700 font-medium">
              Upload School Image
            </label>
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, imageFile: e.target.files[0] })
              }
              className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Save School
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSchool;
