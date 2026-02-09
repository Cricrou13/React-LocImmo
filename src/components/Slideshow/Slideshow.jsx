import { useState } from "react";
import "./Slideshow.scss";

const Slideshow = (props) => {
// 'pictures' est le tableau d'URLs qui vient du JSON

const [currentIndex , SetCurrentIndex] = useState (0);

/* Si je suis à la dernière image, je reviens à la première (0). Sinon, je fais +1. */
const nextSlide = () => {
    SetCurrentIndex(currentIndex === props.pictures.length -1 ? 0 : currentIndex +1);
};

/* Si je suis à la première image, je vais à la dernière (0). Sinon, je fais -1. */
const prevSlide = () => {
    SetCurrentIndex(currentIndex === 0 ? props.pictures.length -1 : currentIndex -1);
};

  // Si une seule image : on affiche juste l'image sans commandes
if (props.pictures.length <= 1) {
    return (
        <div className="slideshow">
            <img src={props.pictures[0]} alt="Logement" className="slideshow_image"/>
        </div>
    );
}

return (
    <div className="slideshow">
        <button className="arrow-left" onClick={prevSlide}>
            <i className="fa-solid fa-chevron-left"></i>
        </button>
        <img src={props.pictures[currentIndex]} alt="Logement" className="slideshow_image"/>

        <button className="arrow-right" onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right"></i>
            </button>
        <span className="counter">{currentIndex + 1} / {props.pictures.length}</span>
    </div>
);
};

export default Slideshow;