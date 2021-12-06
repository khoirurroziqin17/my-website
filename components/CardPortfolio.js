import { Icon } from "@iconify/react";

export default function CardPortfolio({ data }) {
  const { title, image, altText, techs, sourceCode, demo } = data;

  return (
    <article className="flex space-x-3 py-3 sm:px-4">
      <img
        className="flex-none w-32 h-20 mt-2 object-cover rounded-md"
        src={image}
        alt={altText}
      />
      <div className="space-y-2">
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="flex flex-wrap">
          {techs.map((tech) => (
            <span className="mr-3" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap">
          <a
            href={demo}
            target="_blank"
            className="flex items-center space-x-2 mr-6"
          >
            <Icon icon="bx:bx-movie-play" className="text-lg" />
            <span>Demo</span>
          </a>
          <a
            href={`https://github.com/khoirurroziqin17${sourceCode}`}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <Icon icon="ci:github" className="text-lg" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </article>
  );
}
