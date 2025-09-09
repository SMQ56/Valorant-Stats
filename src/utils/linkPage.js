export const linkPage = (id, page) => {
  const link = document.querySelector(id);
  if (!link) return;
  link.addEventListener("click", () => page());
};
