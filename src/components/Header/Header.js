import "./Header.css";

export const Header = () => {
  const header = document.querySelector("header");

  header.innerHTML = `
    <nav class="header-nav">
      <a href="/" class="logo">
        <img src="/assets/VALORANT/imgi_50_e5be4d2bb291c9f399ea1fde8ae2c69dc256733e-24x24.svg" alt="VALORANT Logo">
      </a>

      <div class="hamburger" id="hamburger">☰</div>

      <ul class="nav-links" id="nav-links">
        <li><a id="nav-home" href="#">Home</a></li>
        <li><a id="nav-agents" href="#">Agents</a></li>
        <li><a id="nav-maps" href="#">Maps</a></li>
        <li><a id="nav-weapons" href="#">Weapons</a></li>
      </ul>

      <a href="#" class="user-icon">
        <img src="/assets/user.png" alt="User">
      </a>
    </nav>
  `;

  const hamburger = header.querySelector("#hamburger");
  const navLinks = header.querySelector("#nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
};
