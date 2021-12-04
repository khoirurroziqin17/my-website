export default function BodyLayout({ children }) {
  return (
    <div className="lg:flex-1 order-1 lg:order-[0] bg-gray-900 rounded-b-xl lg:rounded-xl divide-y divide-gray-800 px-2 md:px-4">
      {children}
    </div>
  );
}
