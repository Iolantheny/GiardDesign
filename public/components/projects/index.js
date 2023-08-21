import "./styles.css";
import Arrow from "./../../assets/icons/arrow2.svg";

export function projects(projects) {
  projects.innerHTML = `
        <div class="projects">
            <div class="projects__text">
                <h2>Realizacje</h2>
                <h3>Nasze <span>projekty</span></h3>
            </div>
            <div id="projects-list" class="projects__photos">
              <div id="macy-container" data-toggle="modal" data-target="#Modal">
                <div class="item">
                  <img src="./../../assets/images/photo1.png" alt="obraz" data-target="#carouselItem" data-slide-to="0" onclick="openModalWithSlide(0)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo2.png" alt="obraz" data-target="#carouselItem" data-slide-to="1" onclick="openModalWithSlide(1)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo3.png" alt="obraz" data-target="#carouselItem" data-slide-to="2" onclick="openModalWithSlide(2)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo4.png" alt="obraz" data-target="#carouselItem" data-slide-to="3" onclick="openModalWithSlide(3)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo5.png" alt="obraz" data-target="#carouselItem" data-slide-to="4" onclick="openModalWithSlide(4)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo6.png" alt="obraz" data-target="#carouselItem" data-slide-to="5" onclick="openModalWithSlide(5)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo7.png" alt="obraz" data-target="#carouselItem" data-slide-to="6" onclick="openModalWithSlide(6)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo8.png" alt="obraz" data-target="#carouselItem" data-slide-to="7" onclick="openModalWithSlide(7)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo9.png" alt="obraz" data-target="#carouselItem" data-slide-to="8" onclick="openModalWithSlide(8)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo10.png" alt="obraz" data-target="#carouselItem" data-slide-to="9" onclick="openModalWithSlide(9)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo11.png" alt="obraz" data-target="#carouselItem" data-slide-to="10" onclick="openModalWithSlide(10)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo12.png" alt="obraz" data-target="#carouselItem" data-slide-to="11" onclick="openModalWithSlide(11)">
                </div>
                <div class="item">
                  <img src="./../../assets/images/photo13.png" alt="obraz" data-target="#carouselItem" data-slide-to="12" onclick="openModalWithSlide(12)">
                </div>
              </div>
              <div id="projects-gradient" class="projects__photos--gradient"></div>
              <button id="expand-button" onClick="expandList()" >Rozwiń <img src=${Arrow} alt="arrow" /></button>
            </div>
            <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div id="carouselItem" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img class="d-block w-100" src="./../../assets/images/photo1.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo2.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo3.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo4.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo5.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo6.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo7.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo8.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo9.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo10.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo11.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo12.png">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-100" src="./../../assets/images/photo13.png">
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselItem" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselItem" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div class="modal-footer">
                  </div>
                </div>
              </div>
            </div>
        </div>
    `;

  document.addEventListener("DOMContentLoaded", function () {
    const masonry = new Macy({
      container: "#macy-container",
      trueOrder: false,
      waitForImages: true,
      margin: {
        x: 43,
        y: 42,
      },
      columns: 3,
      breakAt: {
        1200: 2,
        768: 1,
      },
    });
  });

  const projectsList = document.querySelector("#projects-list");
  const gradient = document.querySelector("#projects-gradient");
  const expandButton = document.querySelector("#expand-button");

  window.expandList = function () {
    projectsList.classList.add("visible");
    gradient.classList.add("none");
    expandButton.classList.add("none");
  };

  window.openModalWithSlide = function (slideIndex) {
    const modal = new bootstrap.Modal(document.getElementById("Modal"));
    modal.show();
    const carousel = new bootstrap.Carousel(
      document.getElementById("carouselItem"),
      {
        interval: false,
      }
    );
    carousel.to(slideIndex);
  };
}
