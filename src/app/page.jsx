import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from "@app/main.jsx";
import Header from '@sections/Header.jsx';
import Hero from "@sections/Hero.jsx";
import Works from "@sections/Works.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main>
      <Hero/>
      <Works/>
    </Main>
  </StrictMode>,
)
