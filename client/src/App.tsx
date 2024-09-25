import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Toaster } from "sonner";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
