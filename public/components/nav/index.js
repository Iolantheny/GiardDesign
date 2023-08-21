import "./styles.css";
import logo from "./../../assets/icons/logo.svg";
import seachIcon from "./../../assets/icons/search.svg";
import arrow from "./../../assets/icons/arrow.svg";

export function nav(navigation) {
  navigation.innerHTML = `
  <div class="nav__contener">
    <img src=${logo} alt="giarddesign" class="nav__logo" />
      <nav class="navbar navbar-light amber lighten-4 mb-4">
        <button class="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
        aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
          <div class="animated-icon1"><span></span><span></span><span></span></div>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent20">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#ofert">Oferta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">O firmie</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Realizacje</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#insta">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>

    <div class="nav__menu">
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Oferta
          <img src=${arrow} alt="arrow" />
        </button>
        <div class="dropdown-menu text-center" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item p-6" type="button"><a href="/notFound.html" class="link">Projekty</a></button>
          <button class="dropdown-item p-6" type="button"><a href="/notFound.html" class="link">Wizualizacje</a></button>
          <button class="dropdown-item p-6" type="button"><a href="/notFound.html" class="link">Realizacje</a></button>
        </div>
      </div>
      <button class="btn"><a href="#about" class="link">O firmie</a></button>
      <button class="btn"><a href="#projects" class="link">Realizacje</a></button>
      <button class="btn"><a href="#insta" class="link">Kontakt</a></button>
      <form id="searchbar" action="#">
      <label data-state="close" for="search" class="nav__searchbar">
        <input type="text"" placeholder="Szukaj" onclick="handleInputClick()" onblur="handleInputBlur()" />
        <img src=${seachIcon} alt="search" onclick="handleSearchClick()" aria-hidden="true" />
      </label>
    </form>
    </div>
  </div>
`;
  const stateLabel = document.querySelector(".nav__searchbar");

  function handleInputClick() {
    stateLabel.setAttribute("data-state", "open");
  }

  function handleInputBlur() {
    stateLabel.setAttribute("data-state", "close");
  }

  window.handleSearchClick = function () {
    if (stateLabel.getAttribute("data-state") === "close") {
      handleInputClick();
    } else {
      handleInputBlur();
    }
  };

  $(document).ready(function () {
    $(".first-button").on("click", function () {
      $(".animated-icon1").toggleClass("open");
    });
  });
}
