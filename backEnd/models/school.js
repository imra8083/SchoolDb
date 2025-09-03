// import mongoose from "mongoose";

// const schoolSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//     city: {
//       type: String,
//       required: true,
//     },
//     contactNumber: {
//       type: String,
//       required: true,
//       match: [/^[0-9]{10}$/, "Contact number must be 10 digits"], // simple validation
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
//     },
//     imageUrl: {
//       type: String, // store image path or URL
//       default: null,
//     },
//   },
//   { timestamps: true } // adds createdAt & updatedAt
// );

// const School = mongoose.model("School", schoolSchema);

// export default School;


import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    contactNumber: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Contact number must be 10 digits"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
   imageFile: { type: String, required: true }, 
  },
  { timestamps: true }
);

const School = mongoose.model("School", schoolSchema);

export default School;
