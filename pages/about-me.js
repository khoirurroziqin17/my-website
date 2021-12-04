import BodyLayout from "../components/BodyLayout";
import Layout from "../components/Layout";

export default function AboutMe() {
  const born = new Date(2001, 5, 17, 9).getTime();
  const now = Date.now();
  const age = new Date(now - born).getFullYear() - 1970;

  const startCoding = new Date(2020, 8, 2).getTime();
  let yearCoding = new Date(now - startCoding).getFullYear() - 1970;
  let monthCoding = new Date(now - startCoding).getMonth();

  return (
    <Layout>
      <BodyLayout>
        <div className="text-xl p-4 leading-loose">
          <p>Hai,</p>
          <p>
            Nama saya{" "}
            <span className="text-gray-200 font-medium">Khoirur Roziqin</span>.
          </p>
          <p>
            Saya berusia{" "}
            <span className="text-gray-200 font-medium">{age} tahun</span>.
          </p>
          <p>
            Saya tinggal di{" "}
            <span className="text-gray-200 font-medium">Malang</span>.
          </p>
          <p>
            Saya seorang{" "}
            <span className="text-gray-200 font-medium">
              freelance frontend web developer
            </span>
            .
          </p>
          <p className="mt-6">
            Saya sudah menekuni bidang front-end web development selama{" "}
            {yearCoding} tahun
            {monthCoding} bulan.
          </p>
        </div>
      </BodyLayout>
    </Layout>
  );
}
