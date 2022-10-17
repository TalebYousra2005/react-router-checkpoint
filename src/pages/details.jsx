import { DetailsCard } from "../components/details card";
import { useParams } from "react-router-dom"
import { Movies } from "../data";

const DetailsPage = () => {
  const params=useParams()
  return (
    <>
      <DetailsCard />
    </>
  );
};

export default DetailsPage;
