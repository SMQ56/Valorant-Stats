import "./style.css";
import "./Animations.css";
import { Home } from "./pages/Home/Home";
import { linkPage } from "./utils/linkPage";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Agents } from "./pages/Ag ents/Agents.js";
import { Maps } from "./pages/Maps/Maps.js";
import { Weapons } from "./pages/Weapons/Weapons.js";

Header();

linkPage("#nav-home", Home);
linkPage("#nav-agents", Agents);
linkPage("#nav-maps", Maps);
linkPage("#nav-weapons", Weapons);

Home();

Footer();
