import { Icon } from "@iconify/react";

export default function CardPortfolio({ image, title, techs }) {
  return (
    <article className="flex space-x-3 py-3 sm:px-4">
      <img
        className="flex-none w-32 h-20 mt-2 object-cover rounded-md"
        src={image}
        alt=""
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
          <a href="/" className="flex items-center space-x-2 mr-6">
            <Icon icon="bx:bx-movie-play" className="text-lg" />
            <span>Demo</span>
          </a>
          <a href="/" className="flex items-center space-x-2">
            <Icon icon="ci:github" className="text-lg" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </article>
  );
}
