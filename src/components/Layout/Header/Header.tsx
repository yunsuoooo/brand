import { Nav } from "../Nav";

const Header = () => {
  return (
    <header className="sticky flex justify-center top-0 z-50 font-bold backdrop-filter backdrop-blur-lg backdrop-saturate-200 bg-opacity-70 border-b-[0.5px] bg-theme-dark-header border-b-gray-800 px-6 py-3">
      <div className=" flex justify-between items-center w-full lg:w-screen-lg">
        <h1>yunsway</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
