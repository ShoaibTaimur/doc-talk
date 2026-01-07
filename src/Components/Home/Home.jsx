import Banner from "@/Components/Banner/Banner";
import DocContainer from "@/Components/Doclist/DocContainer";
import Services from "@/Components/Services/Services";
import { useLoaderData } from "react-router";

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
