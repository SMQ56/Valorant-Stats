import "./Home.css";
import { Button } from "../../components/Buttons/Buttons.js";
import { cleanPage } from "../../utils/cleanPage.js";
import { linkPage } from "../../utils/linkPage.js";
import { Weapons } from "../Weapons/Weapons.js";
import { Agents } from "../Agents/Agents.js";
import { Maps } from "../Maps/Maps.js";

export const Home = () => {
  const app = document.querySelector("main");
  cleanPage(app);

  app.innerHTML = `
    <!-- HOME SECTION -->
    <section class="home">
      <video autoplay muted loop playsinline class="background-video">
        <source src="/assets/videos/Official-Cinematic-Video-VALORANT.mp4" type="video/mp4" />
      </video>
      <div class="home-content">
        <img src="/assets/VALORANT/valorant.png" alt="Valorant Logo" class="home-logo" />
        <h1>Master the battlefield with your stats</h1>
        <p>Explore, compare, and improve your VALORANT gameplay. Know your agents, weapons, and performance like never before.</p>
        <div class="border-btn">${Button("Play Now", "btn-outline")}</div>
      </div>
    </section>

    <!-- WEAPONS SECTION -->
    <section class="sections ">
      <img src="/assets/VALORANT/home-bg-1.png" alt="Weapons BG" class="bg"/>
      <div class="section-content">
        <div class="section-text dark-text ">
          <h2>CHOOSE YOUR WEAPON</h2>
          <p>VALORANT offers a wide arsenal—from <strong>precise</strong> pistols to <strong>powerful</strong> sniper rifles. Each weapon has a role, a rhythm, and recoil to master. Learn their <strong>stats</strong>, and you’ll know your best option in every fight.</p>
          ${Button("SEE ALL WEAPONS", "btn-red", "home-btn-weapons")}
        </div>
        <div class="section-media">
          <video autoplay muted loop>
            <source src="/assets/videos/info-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

    <!-- AGENTS SECTION -->
    <section class="sections">
      <img src="/assets/VALORANT/agents-bg-1.png" alt="Agents BG" class="bg" />
      <div class="section-content reverse">
        <div class="section-text">
          <h2>YOUR AGENTS</h2>
          <p>YOUR PLAYSTYLE, YOUR POWER.</p>
          <p>In <strong>VALORANT</strong>, it’s not just about pulling the trigger — it’s about how you play. Every Agent brings <strong>unique abilities</strong> that shape the battlefield and complement your <strong>stats</strong>. Whether you're setting up clutch plays or topping the leaderboard, no two Agents — or players — leave the same mark.</p>
          
          ${Button("SEE ALL AGENTS", "btn-black", "home-btn-agents")}
        </div>
        <div class="section-media">
          <img src="/assets/VALORANT/agents1.png" alt="Agents" />
        </div>
      </div>
    </section>

    <!-- MAPS SECTION -->
    <section class="sections">
      <img src="/assets/VALORANT/Maps-bg-1.png" alt="Maps BG" class="bg" />
      <div class="section-content">
        <div class="section-text dark-text">
          <h2>EXPLORE THE MAPS</h2>
          <p>Every map is a playground for your <strong>strategy</strong>. Each one offers unique environments to master, and creative ways to control the battlefield. Know your corners, <strong>plan</strong> your utility, and <strong>dominate</strong> every angle.</p>

          ${Button("SEE ALL MAPS", "btn-red", "home-btn-maps")}
        </div>
        <div class="section-media">
          <img src="/assets/VALORANT/maps1.png" alt="Maps" />
        </div>
      </div>
    </section>
  `;

  // 🎯 Add listeners after rendering
  linkPage("#home-btn-weapons", Weapons);
  linkPage("#home-btn-agents", Agents);
  linkPage("#home-btn-maps", Maps);
};
