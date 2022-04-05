import "./styles/global.scss";
import "./styles/footer.scss";
import "./styles/formAddBills.scss";
import "./styles/dateFilter.scss";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Overview } from "./components/screens/Overview";
import { Add } from "./components/screens/Add";
import { Reports } from "./components/screens/Reports";
import { Dashboard } from "./components/screens/Dashboard";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/Add" element={<Add />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
