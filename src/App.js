import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { username: "Kathir", password: "CSK-07", team: "CSK" },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} />} />
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;