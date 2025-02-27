import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from "@app/main.jsx";
import Header from '@sections/Header.jsx';
import Hero from "@sections/Hero.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main>
      <Hero/>
    </Main>
  </StrictMode>,
)
