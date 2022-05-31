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

import { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const clientId =
  "685508486820-8nvol3gsgc43jj55bqscipokc3vvp8eu.apps.googleusercontent.com";

export function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
        ux_mode: "redirect",
        redirect_uri: "http://localhost:3333/login/google",
      });
    }

    gapi.load("client:auth2", start);
  });

  const [user, setUser] = useState(false);

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <BrowserRouter>
      {/* Se o usuário for true acesse o Header */}
      {user && <Header user={user} updateUser={updateUser} />}

      <main className="container">
        <Routes>
          <Route
            path="/login"
            element={
              user ? <Navigate to="/" /> : <Login updateUser={updateUser} />
            }
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
