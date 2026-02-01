import { useParams, Navigate } from 'react-router-dom';
// On importe les données depuis le dossier data
import logements from '../../data/logements.json'; 
// On importe les composants nécessaires
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from '../../components/Collapse';
import './Housing.scss';

function Housing() {
    //On récupère l'ID qui est dans l'URL
    const { id } = useParams();

    //On cherche le logement correspondant dans nos données
    const ficheLogement = logements.find((item) => item.id === id);

    //Sécurité : Si l'ID n'existe pas dans le JSON, on redirige vers la page 404
    if (!ficheLogement) {
        return <Navigate to="/404" />;
    }

    return (
        <div className="logement-container">
            {/* Affichage du carrousel avec les images du logement */}
            <Slideshow pictures={ficheLogement.pictures} />

            {/* Section Titre et Localisation */}
            <div className="logement-header">
                <div className="logement-title-section">
                    <h1>{ficheLogement.title}</h1>
                    <h3>{ficheLogement.location}</h3>
                </div>
            </div>
        
            {/* SECTION DES TAGS */}
            <div className="logement-tags">
                {ficheLogement.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>

            <div className="host-info">
                <span className="host-name">{ficheLogement.host.name}</span>
                <img className="host-picture" src={ficheLogement.host.picture} alt={ficheLogement.host.name} />
            </div>
        
            <div className="rating">
            {/* On crée un tableau de 5 pour afficher 5 étoiles */}
            {[1, 2, 3, 4, 5].map((star) => (
                <i 
                    key={star} 
                    className={`fa-solid fa-star ${ficheLogement.rating >= star ? 'active' : 'inactive'}`}
                ></i>
            ))}
            </div>

            {/*  Section des Collapses (Description et Équipements) */}
            <div className="logement-collapse-row">
                <Collapse title="Description" content={ficheLogement.description}/>
                <Collapse 
                    title="Équipements" 
                    content={
                        <ul>
                            {ficheLogement.equipments.map((eq, index) => (
                                <li key={index}>{eq}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    );
}
export default Housing;
