import Header from "../components/Header";
import { body } from "../components/body";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return `
    ${Header()}
    ${body()}
    ${Footer()}
  `;
}
