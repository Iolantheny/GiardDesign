import "./styles.css";
import { card } from "./card.js";
import pencilIcon from "./../../assets/icons/pencil.svg";
import eyeIcon from "./../../assets/icons/eye.svg";
import starsIcon from "./../../assets/icons/stars.svg";

export function ofert(ofert) {
  ofert.innerHTML = `
    <div class="ofert">
        <div class="ofert__text">
            <h2>Oferta</h2>
            <div class="ofert__text--content">
                <h3>Działamy <span>kompleksowo</span></h3>
                <p>
                    Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz 
                    rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie 
                    posłużymy radą i wieloletnim doświadczeniem. 
                </p>
            </div>
        </div>
        <div class="ofert__cards">
            <div id="card1"></div>
            <div id="card2"></div>
            <div id="card3"></div>
        </div>
    </div>
    `;
  card(
    document.querySelector("#card1"),
    pencilIcon,
    "Projekty",
    "Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.",
    "Dowiedz się więcej"
  );
  card(
    document.querySelector("#card2"),
    eyeIcon,
    "Wizualizacje",
    "Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.",
    "Dowiedz się więcej"
  );
  card(
    document.querySelector("#card3"),
    starsIcon,
    "Realizacje",
    "Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.",
    "Zobacz nasze realizacje"
  );
}
