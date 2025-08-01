import "./Buttons.css";

/**
 * Creates a customizable button.
 *
 * @param {string} text - The text inside the button.
 * @param {string} className - The CSS class (e.g. "btn-red", "btn-black", "btn-outline").
 * @param {string} id - The ID to assign to the button (optional).
 * @returns {string} - HTML string of the button.
 */
export const Button = (text, className = "", id = "") => {
  const btnId = id ? `id="${id}"` : "";
  const btnHTML = `<button class="btn ${className}" ${btnId}>${text}</button>`;

  return btnHTML;
};
