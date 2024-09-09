function AddNav() {
  // Create the nav element
  const nav = document.createElement("nav");
  nav.innerHTML = `
  <nav class="nav">
    <ul>
      <li><a href="/page/contact">Contact</a></li>
      <li><a href="/page/about">About</a></li>
      <li><a href="https://github.com/JohannesThoren">Github</a></li>
      <li><a href="https://www.instagram.com/johannes.thoren/">Instagram</a></li>
    </ul>
  </nav>
    `;
  // Append the nav element to the body
  document.querySelector("Header").appendChild(nav);
}
