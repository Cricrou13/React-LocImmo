import { Link } from "react-router-dom"

// On reçoit les données (props) entre les parenthèses
// Ici, on utilise la déstructuration pour récupérer directement title et cover
function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">

    <article className="card">
      <img src={cover} alt={title} className="card-image" />
      <div className="card-layer"></div>
      <h3 className="card-title">{title}</h3>
    </article>
    </Link>
  );
}

export default Card;