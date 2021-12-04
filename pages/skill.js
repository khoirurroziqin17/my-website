import BodyLayout from "../components/BodyLayout";
import CardSkill from "../components/CardSkill";
import Layout from "../components/Layout";

export default function Skill() {
  return (
    <Layout>
      <BodyLayout>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 py-4">
          <CardSkill icon="vscode-icons:file-type-html" title="HTML" />
          <CardSkill icon="vscode-icons:file-type-css" title="CSS" />
          <CardSkill
            icon="vscode-icons:file-type-js-official"
            title="JavaScript"
          />
          <CardSkill
            icon="vscode-icons:file-type-tailwind"
            title="TailwindCSS"
          />
          <CardSkill icon="vscode-icons:file-type-reactjs" title="ReactJS" />
          <CardSkill icon="logos:nextjs-icon" title="NextJS" />
        </div>
      </BodyLayout>
    </Layout>
  );
}
