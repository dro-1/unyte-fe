import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import { Searchbar } from "./searchbar";

export const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <header className="bg-[#232f3e] p-6">
        <Navbar />
        {location.pathname == "/" ? <Searchbar /> : ""}
      </header>
      <Outlet />
    </div>
  );
};
