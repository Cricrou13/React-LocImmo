import { Link } from "react-router-dom"

// On reçoit les données (props) entre les parenthèses
// déstructuration pour récupérer directement title et cover
function Card(props) {
  return (
    <Link to={`/logement/${props.id}`} className="card">

    <article className="card">
      <img src={props.cover} alt={props.title} className="card-image" />
      <div className="card-layer"></div>
      <h3 className="card-title">{props.title}</h3>
    </article>
    </Link>
  );
}

export default Card;