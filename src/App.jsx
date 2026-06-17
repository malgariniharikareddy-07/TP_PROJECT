import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Poojas from "./pages/Poojas";
import Donations from "./pages/Donations";   // ✅ fixed import name
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/poojas" element={<Poojas />} />
        <Route path="/donation" element={<Donations />} /> {/* ✅ fixed component */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
