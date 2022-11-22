/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
const userInterface = () => {
  const nav = document.createElement('div');
  nav.innerHTML = `
  <header>
  <h1>meals</h1>
  <nav>
      <ul class="nav-con">
          <li class="nav-list"><a href="#">meals</a></li>
          <li class="nav-list"><a href="#">order</a></li>
          <li class="nav-list"><a href="#">faQs</a></li>
      </ul>
  </nav>
</header>
  `;
  document.body.appendChild(nav);
};

export { userInterface };