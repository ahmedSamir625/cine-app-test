import avatar from '../../assets/images/avatar.jpg'
import logo from '../../assets/images/logo.png'


export const NavBar = () => {
    const navDiv = document.createElement("nav");
    navDiv.classList.add('navbar' ,'navbar-expand-lg', 'navbar-dark' ,'navbar-bg')
  
    navDiv.innerHTML = `   
    <div class="container-fluid ms-5 me-5">
    <a class="navbar-brand" href="#">
      <img
        class="logo-img img-fluid"
        src="${logo}"
        alt="logo"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse text-center"
      id="navbarSupportedContent"
    >
      <div class="w-100 d-flex justify-content-center">
        <div style="z-index: 1" class="search-input-container">
          <input
            class="search-input"
            type="text"
            placeholder="Search for your favorite movies"
          />
          <span><i class="fas fa-search"></i></span>
        </div>
      </div>
      <div
        class="
          d-flex
          flex-row
          justify-content-center
          align-items-center
        "
      >
        <button class="icon-btn"><i class="fas fa-plus"></i></button>
        <button class="icon-btn"><i class="fas fa-bell"></i></button>

        <img
          class="img-fluid avatar"
          src="${avatar}"
          alt=""
        />

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ahmed Samir
          </button>
          <ul
            class="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
          >
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"
                >Something else here</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

              `;
  
    return navDiv;
  };
  
