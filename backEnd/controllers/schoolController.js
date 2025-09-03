import School from "../models/school.js";

// Add a new school
/*export const addSchool = async (req, res) => {
  try {
    const { name, address, city, contactNumber, email, imageUrl } = req.body;

    const school = new School({ name, address, city, contactNumber, email, imageUrl });
    await school.save();

    res.status(201).json({ message: "✅ School added successfully", school });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};*/


export const addSchool = async (req, res) => {
  try {
    const { name, address, city, contactNumber, email } = req.body;

    // Store only filename
    const imageFile = req.file ? req.file.filename : null;

    const school = new School({ 
      name, 
      address, 
      city, 
      contactNumber, 
      email, 
      imageFile 
    });

    await school.save();

    return res.status(201).json({ message: "✅ School added successfully", school });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({ error: messages.join(", ") });
    }

    if (err.code === 11000) {
      const duplicateField = Object.keys(err.keyValue)[0];
      return res.status(400).json({
        error: `${duplicateField.charAt(0).toUpperCase() + duplicateField.slice(1)} already exists`,
      });
    }

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all schools
export const getSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
