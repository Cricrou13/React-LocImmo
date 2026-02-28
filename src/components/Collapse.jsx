import { useState } from "react";
import vectorLogo from '../assets/images/Vector.svg'; 

function Collapse(props) {
    // Utilisation de la déstructuration standard (plus propre que stateArray)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{props.title}</h2>
                {/* On garde ta span, on lui ajoute une classe active pour la rotation */}
                <span className={`collapse-arrow ${isOpen ? 'active' : ''}`}>
                    <img src={vectorLogo} alt="chevron"/>
                </span>
            </div>

            {/* 
                classe dynamique pour piloter l'animation CSS
            */}
            <div className={`collapse-content-wrapper ${isOpen ? 'opened' : 'closed'}`}>
                <div className="collapse-content">
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default Collapse;