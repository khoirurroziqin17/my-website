import BodyLayout from "../components/BodyLayout";
import CardPortfolio from "../components/CardPortfolio";
import Layout from "../components/Layout";
import portfolioData from "./../dataPortfolio.json";

export default function Home() {
  return (
    <Layout>
      <BodyLayout>
        {portfolioData.map((data) => (
          <CardPortfolio key={data.id} data={data} />
        ))}
      </BodyLayout>
    </Layout>
  );
}
