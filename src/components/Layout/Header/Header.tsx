import { Nav } from "../Nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 font-bold backdrop-filter backdrop-blur-lg backdrop-saturate-200 border-b-[0.5px] bg-gray-900/70 border-b-gray-800 px-6 py-3 flex justify-between items-center">
      <h1>yunsway</h1>
      <Nav />
    </header>
  );
};

export default Header;
