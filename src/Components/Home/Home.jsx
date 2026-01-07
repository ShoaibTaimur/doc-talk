import { useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import DocContainer from "../Doclist/DocContainer";
import Services from "../Services/Services";

const Home = () => {
  const docInfoData = useLoaderData();

  return (
    <div className="bg-[#ebebeb] space-y-15 mt-6 mb-6">
      <Banner />
      <DocContainer docInfoData={docInfoData} />
      <Services />
    </div>
  );
};

export default Home;
