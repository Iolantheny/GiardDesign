import "./style.css";
import { nav } from "./public/components/nav";
import { home } from "./public/components/home";
import { ofert } from "./public/components/ofert";
import { about } from "./public/components/about";
import { projects } from "./public/components/projects";
import { instagram } from "./public/components/instagram";
import { footer } from "./public/components/footer";

document.querySelector("#app").innerHTML = `
  <div id="navigation"></div>
  <div id="home"></div>
  <div id="ofert"></div>
  <div id="about"></div>
  <div id="projects"></div>
  <div id="insta"></div>
  <div id="footer"></div>
`;

nav(document.querySelector("#navigation"));
home(document.querySelector("#home"));
ofert(document.querySelector("#ofert"));
about(document.querySelector("#about"));
projects(document.querySelector("#projects"));
instagram(document.querySelector("#insta"));
footer(document.querySelector("#footer"));
