import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import HomePage from "@/react-app/pages/Home";
import ServicesPage from "@/react-app/pages/Services";
import ProcessPage from "@/react-app/pages/Process";
import AboutPage from "@/react-app/pages/About";
import TeamPage from "@/react-app/pages/Team";
import ContactPage from "@/react-app/pages/Contact";
import PrivacyPage from "@/react-app/pages/Privacy";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/processo" element={<ProcessPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/equipe" element={<TeamPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/privacidade" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
