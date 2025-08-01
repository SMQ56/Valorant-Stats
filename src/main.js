import "./style.css";
import { Home } from './pages/Home/Home';
import { linkPage } from './utils/linkPage';

import { Header } from "./components/Header/Header";
Header();

linkPage("#nav-home", Home);/* 
linkPage("#nav-home", Home);
linkPage("#nav-home", Home); */

Home(); 
import { Agents } from "./pages/Agents/Agents.js";

linkPage("#nav-agents", Agents);
linkPage("#home-btn-agents", Agents)

// Carga la página Home al iniciar

// Enlazamos los botones del header con sus páginas (las crearás luego)
/* import { Agents } from './pages/Agents/Agents';
import { Maps } from './pages/Maps/Maps';
import { Weapons } from './pages/Weapons/Weapons'; */
/* 
linkPage("#nav-agents", () => {
  cleanPage(app);
  Agents();
});

linkPage("#nav-maps", () => {
  cleanPage(app);
  Maps();
});

linkPage("#nav-weapons", () => {
  cleanPage(app);
  Weapons();
}); */
