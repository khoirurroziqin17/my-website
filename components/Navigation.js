import { useRouter } from "next/router";
import NavLink from "./NavLink";

export default function Navigation({ className }) {
  const path = useRouter().pathname;

  return (
    <ul
      className={`sticky top-0 flex justify-evenly items-baseline lg:flex-col lg:justify-start lg:order-1 font-medium lg:text-lg mt-8 md:mt-0 bg-gray-900 lg:bg-transparent rounded-t-xl py-4 border-b border-gray-600 lg:border-none ${className}`}
    >
      <NavLink title="Portofolio" link="/" active={path == "/" && true} />
      <NavLink title="Bahasa" link="/skill" active={path == "/skill" && true} />
      <NavLink
        title="Tentang"
        link="/about-me"
        active={path == "/about-me" && true}
      />
    </ul>
  );
}
