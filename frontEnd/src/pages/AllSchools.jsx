import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        //const response = await axios.get("http://localhost:3000/api/schools");
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/schools`);
        setSchools(response.data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className=" p-6 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Schools List</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {schools.map((school) => (
          <div
            key={school._id}
            className="border border-gray-300 rounded-lg p-4 w-64 shadow hover:shadow-lg transition-shadow duration-300"
          >
            {/* <img
            src={`http://localhost:3000/uploads/${school.imageFile}`} // use uploaded file
            alt={school.name}
            className="w-full h-40 object-cover rounded-md mb-4"
          /> */}

          <img
            src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${school.imageFile}`}
            alt={school.name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />

            {/* //\<h3 className="text-xl font-semibold mb-2">{school.name}</h3> */}
            <h3 className="text-xl font-semibold mb-2 text-black">{school.name}</h3>

            <p className="text-gray-700 mb-1"><strong>Address:</strong> {school.address}</p>
            <p className="text-gray-700 mb-1"><strong>City:</strong> {school.city}</p>
            <p className="text-gray-700 mb-1"><strong>Contact:</strong> {school.contactNumber}</p>
            <p className="text-gray-700"><strong>Email:</strong> {school.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowSchools;
