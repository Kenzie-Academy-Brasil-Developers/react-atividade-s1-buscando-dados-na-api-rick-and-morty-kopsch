import "./styles.css";

const CharCard = ({ name, species, image }) => {
  return (
    <>
      <img className="card-box__image" alt={name} src={image} />
      <h4 className="card-box__name">{name}</h4>
      <p className="card-box__species">{species}</p>
    </>
  );
};

export default CharCard;
