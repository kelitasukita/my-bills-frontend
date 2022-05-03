import "./styles/global.scss";
import "./styles/footer.scss";
import "./styles/formAddBills.scss";
import "./styles/dateFilter.scss";

import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Overview } from "./components/screens/Overview";
import { Add } from "./components/screens/Add";
import { Reports } from "./components/screens/Reports";
import { Dashboard } from "./components/screens/Dashboard";
import { Login } from "./components/screens/Login";

export function App() {
  const user = true;

  return (
    <BrowserRouter>
      {/* Se o usuário for true acesse o Header */}
      {user && <Header />}

      <main className="container">
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/"
            element={user ? <Overview /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/reports"
            element={user ? <Reports /> : <Navigate to="/login" />}
          />
          <Route
            path="/Add"
            element={user ? <Add /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
