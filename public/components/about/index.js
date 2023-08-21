import "./styles.css";
import Img from "./../../assets/images/about.png";
import Arrow from "./../../assets/icons/arrow2.svg";

export function about(about) {
  about.innerHTML = `
        <div class="about">
            <img src=${Img} alt="garden" />
            <div class="about__content">
                <div class="about__content--text">
                    <h2>O firmie</h2>
                    <div>
                        <h3>Tworzymy z <span>pasją</span></h3>
                        <p>
                            Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, 
                            których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie 
                            nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, 
                            dostosowane do współczesnego trybu życia.
                        </p>
                    </div>
                </div>
                <button><a href="/notFound.html" class="btn-link white">Poznaj nas bliżej <img src=${Arrow} alt="arrow" /></a></button>
            </div>
        </div>
    `;
}
