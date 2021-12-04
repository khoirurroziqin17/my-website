import { Icon } from "@iconify/react";

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center md:flex-none md:w-48 md:h-screen md:fixed lg:w-60">
      <img
        src="/rozi.jpg"
        className="w-24 h-24 object-cover rounded-full mb-3"
      />
      <h1 className="font-semibold text-2xl text-gray-100">Khoirur Roziqin</h1>
      <h2 className="mb-4">Frontend Web Developer</h2>
      <div className="flex text-lg space-x-3">
        <a
          href="https://www.instagram.com/khoirurroziqin17/"
          className="hover:text-red-400 duration-150"
        >
          <Icon icon="ci:instagram" />
        </a>
        <a href="/" className="hover:text-blue-600 duration-150">
          <Icon icon="ci:linkedin" />
        </a>
        <a
          href="https://github.com/khoirurroziqin17/"
          className="hover:text-gray-900 duration-150"
        >
          <Icon icon="ci:github" />
        </a>
        <a
          href="https://wa.me/6282139111663"
          className="hover:text-green-400 duration-150"
        >
          <Icon icon="bx:bxl-whatsapp" />
        </a>
      </div>
      <a
        href="mailto:khoirurroziqin2001@gmail.com"
        className="flex items-center border border-gray-500 px-4 py-4 mt-4 rounded-xl"
      >
        <Icon icon="ci:mail" className="text-xl" />
        <span className="px-6">Say Hai</span>
      </a>
    </div>
  );
}
