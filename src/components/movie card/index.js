import { Movies } from "../../data";

export const MovieCard = ({el}) => {
  return (
            <div className="card" key={el.id} style={{ width: "18rem" }}>
              <img src={el.posterURL} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
                <h5 className="card-title text-warning">{el.rating}</h5>
                <p className="card-text">{el.description}</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
  );
};
