import Navigation from "./Navigation";
import Profile from "./Profile";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-700 text-gray-300 p-6">
      <div className="container mx-auto relative md:flex">
        <Profile />
        <div className="relative md:flex-1 md:ml-56 lg:ml-64 lg:mr-32 lg:flex">
          <Navigation className="lg:hidden" />
          {children}
          <div className="relative">
            <Navigation className="hidden lg:block lg:fixed" />
          </div>
        </div>
      </div>
    </div>
  );
}
