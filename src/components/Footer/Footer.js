import "./Footer.css";

export const Footer = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.innerHTML = `
    <div class="footer-left">
      <p>Powered by <strong>Sufyan</strong> © 2025</p>
    </div>

      <img src="/assets/VALORANT/Valorant-Stats-Logo.png" alt="VALORANT STATS Logo" class="footer-logo" />

    <div class="footer-right">
      <h4>Contact</h4>
      <div class="social-links">
        <a href="https://github.com/SMQ56" target="_blank" aria-label="GitHub">
          <img src="/assets/Social/github.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/sufyan-mohammad" target="_blank" aria-label="LinkedIn">
          <img src="/assets/Social/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:sufyanmq06@gmail.com" aria-label="Gmail">
          <img src="/assets/Social/gmail.png" alt="Gmail" />
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(footer);
};
