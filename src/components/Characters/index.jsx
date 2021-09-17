import CharCard from "../CharCard";
import "./styles.css";

const Characters = ({ characterList }) => {
  return (
    <div className="character-list">
      <h3 className="character-list__title">Meus personagens</h3>
      <div className="box-list">
        {characterList.map((elm) => {
          const { id, name, status, species, image } = elm;
          return (
            <>
              {status === "Alive" ? (
                <div className="box-card" key={id}>
                  <CharCard
                    name={name}
                    status={status}
                    species={species}
                    image={image}
                  />
                </div>
              ) : (
                <div className="box-card box-card--dead" key={id}>
                  <CharCard
                    name={name}
                    status={status}
                    species={species}
                    image={image}
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
