import "./styles.css";
import logo from "./../../assets/icons/logo.svg";
import adRespectLogo from "./../../assets/icons/adRespect.svg";

export function footer(footer) {
  footer.innerHTML = `
        <div class="footer">
            <div class="footer__content">
                <div class="footer__content--text">
                    <img src=${logo} alt="giarddesign" class="footer__logo" />
                    <div>
                        <p>Daj znać, co możemy dla Ciebie zrobić!</p>
                        <button>Skontaktuj się z nami</button>
                    </div>
                </div>
                <div class="footer__content--line"></div>
                <div class="footer__content--text">
                    <div class="footer__content--text-links">
                        <a href="#insta">Kontakt</a>
                        <a href="https://www.instagram.com" target="_blank">Instagram</a>
                        <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                        <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
                    </div>
                    <div class="footer__content--text-links">
                        <p>000-000-000</p>
                        <p>giarddesign@kontakt.pl</p>
                    </div>
                </div>
            </div>
            <div class="footer__content--text">
                <p>Prawa zastrzeżone © 2022</p>
                <div class="footed__madeby">
                    <p>made by</p>
                    <img src=${adRespectLogo} alt="adRespect" class="footer__adrespect" />
                </div>
            </div>
        </div>
    `;
}
