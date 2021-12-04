import { Icon } from "@iconify/react";

export default function CardSkill({ icon, title }) {
  return (
    <div className="flex flex-col items-center border border-gray-500 py-4 mx-2 my-2 rounded-xl">
      <Icon icon={icon} className="text-6xl" />
      <span className="font-medium pt-2">{title}</span>
    </div>
  );
}
