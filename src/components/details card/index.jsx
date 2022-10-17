import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { Movies } from "../../data";
export const DetailsCard = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const params = useParams();
  const foundMovie = Movies.find(obj => {
     return obj.id === 1  //  params.id;
  });
  return (
    <>
      {foundMovie && (
      <div
        className="container"
        onClick={() => {
          console.log(foundMovie);
          console.log(params.id);
        }}
      >
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="card">
              <h1 className="card-title">
                Movie details :<br /> title :<b>{foundMovie.title}</b>
              </h1>
              <p>Description : {foundMovie.description}</p>
              <div className="card-body">
                <YouTube videoId={foundMovie.videoId} opts={opts} />
              </div>
            </div>
          </div>
        </div>
      </div>
        )} 
    </>
  );
};
