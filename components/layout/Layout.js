import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactDock from "../ui/ContactDock";

export default function Layout({ children }) {

  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <Navbar onContactClick={() => setContactOpen(true)} />

      {/* PAGE CONTENT */}
      <main>
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

      {/* CONTACT DOCK */}
      <ContactDock
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
