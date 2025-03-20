import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from "@app/main.jsx";
import Header from '@sections/Header.jsx';
import Hero from "@sections/Hero.jsx";
import Works from "@sections/Works.jsx";
import About from "@sections/About.jsx";
import Templates from "@sections/Templates.jsx";
import Expirience from "@sections/Expirience.jsx";
import Company from "@sections/Company.jsx";
import Contacts from "@sections/Contacts.jsx";
import Footer from "@sections/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main>
      <Hero/>
      <Works/>
      <About/>
      <Templates/>
      <Expirience/>
      <Company/>
      <Contacts/>
    </Main>
    <Footer />
  </StrictMode>,
)
