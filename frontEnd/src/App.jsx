import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddSchool from "./pages/AddSchools";
import ShowSchools from "./pages/AllSchools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="p-4">
        {/* Navigation */}

    <nav className="flex justify-center items-center h-16 bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
  <Link to="/" className="px-4 text-lg font-semibold hover:text-yellow-400">
    Home
  </Link>
  <Link to="/addschool" className="px-4 text-lg font-semibold hover:text-yellow-400">
    Add School
  </Link>
  <Link to="/showschools" className="px-4 text-lg font-semibold hover:text-yellow-400">
    Show Schools
  </Link>
</nav>



        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addschool" element={<AddSchool />} />
          <Route path="/showschools" element={<ShowSchools />} />
        </Routes>

        {/* ✅ Toast container (global notifications) */}
        <ToastContainer
          position="top-right"
          autoClose={3000}  // closes after 3 seconds
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </div>
    </Router>
  );
}

export default App;
