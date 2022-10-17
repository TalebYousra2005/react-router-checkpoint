import { useState } from "react";
export const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div className="container">
      <h1>Add new movie</h1>
      <div className="row p-2 m-3">
        <div className="col-md-12">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="add title"
            className="form-control"
            value={title ? title : ""}
          />
        </div>
      </div>

      <div className="row p-2 m-3">
        <div className="col-md-12">
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="add description"
            className="form-control"
            value={description ? description : ""}
          />
        </div>
      </div>

      <div className="row p-2 m-3">
        <div className="col-md-12">
          <input
            type="text"
            onChange={(e) => setPosterURL(e.target.value)}
            placeholder="add poster url"
            className="form-control"
            value={posterUrl ? posterUrl : ""}
          />
        </div>
      </div>

      <div className="row p-2 m-3">
        <div className="col-md-12">
          <input
            type="text"
            onChange={(e) => setRating(e.target.value)}
            placeholder="add rating"
            className="form-control"
            value={rating ? rating : ""}
          />
        </div>
      </div>

      <button
        className="btn btn-warning"
        onClick={() => {
          addMovie(title, description, posterUrl, rating);
          setTitle("")
          setDescription("")
          setPosterURL("")
          setRating("")
        }}
      >
        Add
      </button>
    </div>
  );
};
