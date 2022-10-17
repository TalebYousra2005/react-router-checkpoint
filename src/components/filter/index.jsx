export const SearchMovie = ({ setFilter = () => null }) => {
    return (
        <>
        <h1 className="text-center ">Search movie</h1>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        className="form-control p-2 m-3"
        placeholder="Enter text"
      />
      </>
    );
  };