import ImageLogo from "./images/logo.jpeg";
import NoImage from "./images/no-image.png";
import Image1683086563595png from "./images/1683086563595.png";
import Image1683086971875png from "./images/1683086971875.png";
import Image1683086972052png from "./images/1683086972052.png";
import Image1683087384492png from "./images/1683087384492.png";
const assets = (name: string) => {
  switch (name) {
    case "logo":
      return ImageLogo;
    case "1683086563595png":
      return Image1683086563595png;
    case "1683086971875png":
      return Image1683086971875png;
    case "1683086972052png":
      return Image1683086972052png;
    case "1683087384492png":
      return Image1683087384492png;
    default:
      return NoImage;
  }
};
export default assets;
