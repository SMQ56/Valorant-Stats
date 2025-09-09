import "./Modal.css";

export function openModal(content) {
  const modal = document.createElement("div");
  modal.classList.add("modal-overlay");

  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-btn">&times;</button>
      ${content}
    </div>
  `;

  document.body.appendChild(modal);

  setTimeout(() => modal.classList.add("open"), 10);

  // Cierre
  modal.querySelector(".close-btn").addEventListener("click", () => {
    modal.classList.remove("open");
    setTimeout(() => modal.remove(), 300);
  });

  return modal;
}
