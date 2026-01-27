import { useState } from "react";

function Collapse({ title, content }) {
      // Déclaration du State pour savoir si c'est ouvert ou fermé
      const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
             {/* Gestion de l'événement clic */}
            <div className="collapse-header" onClick={()=> setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <span className={`collapse-arrow ${isOpen ? 'active' : ''}`}>
                    ^
                </span>
{/*                 <span className={isOpen ? 'arrow-up' : 'arrow-down'}>^</span>
 */}            </div>
            
             {/* Affichage conditionnel selon le State */}
             {isOpen && <div className="collapse-content">{content}</div>}
        </div>
);
}

export default Collapse;