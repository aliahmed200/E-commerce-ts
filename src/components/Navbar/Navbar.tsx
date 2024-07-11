import AnnouncementBar from "./AnnouncementBar";
import { Logo } from "./Logo";
import NavItem from "./NavItem";
import DarkModeToggle from "./DarkModeToggle";
import { useContext, useEffect, useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { UserContext } from "../../context/UserToken";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [userName, setUserName] = useState<{
    id: string;
    name: string;
  }>();
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const user = useContext(UserContext);

  if (!user) {
    throw new Error("SomeComponent must be used within a UserContextProvider");
  }

  const { userToken } = user;
  useEffect(() => {
    if (userToken) {
      const decodedToken: any = jwtDecode(userToken);
      setUserName(decodedToken);
    }
  }, [userToken]);

  return (
    <nav className="dark:bg-[#222831]">
      <AnnouncementBar />
      <div className="flex items-center flex-wrap justify-between lg:px-24 px-12 py-3">
        <Logo />
        <HamburgerIcon isShow={isShow} setIsShow={setIsShow} />
        <NavItem isShow={isShow} />
        <p className="font-bold dark:text-white">
          Hello{" "}
          <span className="capitalize font-bold underline">
            {userName?.name}
          </span>
          !
        </p>

        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      </div>
      <hr className="bg-gray-900 h-[1px]" />
    </nav>
  );
};

export default Navbar;
