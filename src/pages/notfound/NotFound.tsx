import { NavLink } from "react-router-dom";
import Button from "../../components/ui/Button";

const NotFound = () => {
  return (
    <div className="pt-12">
      <p className="text-sm font-normal text-black dark:text-white">
        <span className="text-[#7D8184]">Home /</span> Order
      </p>
      <div className="flex flex-col justify-center items-center py-44">
        <h4 className="text-9xl mb-6">404 Not Found</h4>
        <p className="mb-12">
          Your visited page not found. You may go home page.
        </p>
        <Button>
          <NavLink to={"/"}>Go To Home Page</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
