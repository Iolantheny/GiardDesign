import "./styles.css";
import arrow from "./../../assets/icons/arrow2.svg";

export function card(query, icon, title, content, link) {
  query.innerHTML = `
    <div class="card">
      <img src=${icon} alt="icon" />
      <div class="card__content">
        <p class="card__content--title">${title}</p>
        <p class="card__content--text">${content}</p>
      </div>
      <button class="card__link"><a href="/notFound.html" class="btn-link green">${link} <img src=${arrow} alt="arrow" /></a></button>
    </div>
  `;
}
