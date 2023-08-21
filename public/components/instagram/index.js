import "./styles.css";

export function instagram(insta) {
  insta.innerHTML = `
        <div class="insta">
            <div class="insta__content">
                <h2>Zostańmy w kontakcie! Znajdziesz nas na <span>Instagramie<span>.</h2>
                <div class="insta__content--link">
                <p>Śledź nasze najnowsze realizacje!</p>
                <a href='https://www.instagram.com/' target="_blank">Instagram</a>
                </div>
            </div>
        </div>
    `;
}
