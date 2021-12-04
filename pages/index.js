import BodyLayout from "../components/BodyLayout";
import CardPortfolio from "../components/CardPortfolio";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <BodyLayout>
        <CardPortfolio
          image="/img1.jpg"
          title="Youtube Hompage Clone"
          techs={["reactjs", "tailwindcss"]}
        />
        <CardPortfolio
          image="/img2.png"
          title="Facebook Homepage Clone"
          techs={["nextjs", "tailwindcss"]}
        />
        <CardPortfolio
          image="/img3.png"
          title="Twitter Homepage Clone"
          techs={["reactjs", "bootstrap"]}
        />
        <CardPortfolio
          image="/img1.jpg"
          title="Youtube Hompage Clone"
          techs={["reactjs", "tailwindcss"]}
        />
        <CardPortfolio
          image="/img2.png"
          title="Facebook Homepage Clone"
          techs={["nextjs", "tailwindcss"]}
        />
        <CardPortfolio
          image="/img3.png"
          title="Twitter Homepage Clone"
          techs={["reactjs", "bootstrap"]}
        />
      </BodyLayout>
    </Layout>
  );
}
