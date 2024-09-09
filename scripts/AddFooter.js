function AddFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer db-line"
  footer.innerHTML = `Copyright (C) 2024 Johannes Thorén`;
  document.body.appendChild(footer);
}