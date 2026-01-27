import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import Collapse from '../components/Collapse';

function Logement() {
      // 1. On récupère l'ID qui est dans l'URL
    const { id } = useParams();

     // 2. On cherche le logement correspondant dans nos données
     const ficheLogement = logements.find((item) => item.id === id);

      // 3. Contrainte 404 : Si l'ID n'existe pas, on redirige vers la page d'erreur
      if (!ficheLogement) {
        return <Navigate to="/404" />;
      }

return (
    <div className="logement-container">
        <h1>{ficheLogement.title}</h1>
        <p>{ficheLogement.location}</p>

             {/* C'est ici que tu utiliseras ton composant Collapse pour la description ! */}

        <div className="logement-collapse-row">
        {/* On réutilise le composant Collapse : Modularité validée ! */}
        <Collapse title="Description" content={ficheLogement.description} />
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

export default Logement;