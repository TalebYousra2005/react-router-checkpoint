import { useNavigate } from "react-router-dom";
export const MovieCard = ({ el }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      key={el.id}
      style={{ width: "18rem" }}
      onClick={() => {
        navigate(`/details/${el.id}`)
      }}
    >
      <img src={el.posterURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{el.title}</h5>
        <h5 className="card-title text-warning">{el.rating}</h5>
        <p className="card-text">{el.description}</p>
      </div>
    </div>
  );
};
