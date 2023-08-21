import "./styles.css";
import homeImg from "./../../assets/images/home.png";
import arrow from "./../../assets/icons/arrow2.svg";
import garden from "./../../assets/images/garden.jpg";

export function home(home) {
  home.innerHTML = `
  <div class="slider container">
  <div class="slides row">
    <div class="slide col-md-6 d-flex">
      <div class="slide__content d-flex">
        <div class="slide__content-text">
          <h1>Nowoczesna<br/> aranżacja <br/>Twojego ogrodu</h1>
          <p>Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług
            z indywidualnym podejściem do każdego projektu.</p>
              <div class="slide__content-btns">
                <button type="button" class="btn"><a href="#insta" class="btn-link white">Skontaktuj się z nami</a></button>
                <button type="button" class="btn">
                  <a href="#projects" class="btn-link green">
                    Zobacz nasze realizacje
                    <img src=${arrow} alt="arrow" />
                  </a>
                </button>
              </div>
          </div>
      </div>
      <div class="slide__content-img">
        <img src=${homeImg} alt="Obraz 1" />
      </div>
    </div>
    <div class="slide col-md-6 slide__green d-flex">
      <div class="slide__content-img">
        <img src=${garden} alt="Obraz 2"  />
      </div>
      <div class="slide__content d-flex">
        <div class="slide__content-text">
          <h1>Lorem ipsum </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="slider-btns">
    <div class="slider-btn prev" onClick="prevSlide()"><img src=${arrow} alt="arrow" /></div>
    <div class="slider-btn next" onClick="nextSlide()"><img src=${arrow} alt="arrow" /></div>
  </div>
</div>
  `;

  const slider = document.querySelector(".slider");
  const slides = document.querySelector(".slides");
  const slideWidth = slider.clientWidth;
  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = slides.children.length - 1;
    } else if (index >= slides.children.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    const translateX = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${translateX}px)`;
  }

  window.prevSlide = function () {
    goToSlide(currentIndex - 1);
  };

  window.nextSlide = function () {
    goToSlide(currentIndex + 1);
  };

  setInterval(nextSlide, 5000);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  });
}
