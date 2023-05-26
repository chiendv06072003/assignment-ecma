import Navigo from "navigo";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";


const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = (pages) => {
  document.querySelector('#app').innerHTML = pages();
}

// router 
router.on('/', () => render(HomePage, app));
router.on('/about', () => render(AboutPage, app));
router.on('/blog', () => render(BlogPage, app));

router.resolve();
