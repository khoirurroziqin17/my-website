import Link from "next/link";

export default function NavLink({ title, link, active }) {
  return (
    <li>
      <Link href={link}>
        <a
          className={`block px-4 py-2 ${
            active &&
            "bg-gray-300 text-gray-800 rounded-xl lg:bg-transparent lg:text-gray-100 lg:font-semibold lg:underline"
          }`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}
