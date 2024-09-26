import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Toaster } from "sonner";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main className="app">
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Toaster toastOptions={{ className: "toast" }} />
      </main>
    </ThemeProvider>
  );
}

export default App;
