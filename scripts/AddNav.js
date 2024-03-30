function AddNav() {
  // Create the nav element
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <ul>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="cv.html">CV</a></li>
      <li><a href="https://github.com/JohannesThoren">Github</a></li>
      <li><a href="https://www.instagram.com/johannes.thoren/">Instagram</a></li>
    </ul>
    `
  // Append the nav element to the body
  document.querySelector("Header").appendChild(nav)
}