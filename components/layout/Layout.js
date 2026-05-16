import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactDock from "../ui/ContactDock";

export default function Layout({ children }) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />

      <main className="pt-16 sm:pt-16">
        {children}
      </main>

      <Footer />

      <ContactDock
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}