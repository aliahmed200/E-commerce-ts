import { NavLink } from "react-router-dom";
import Button from "../../components/ui/Button";

const AllOrders = () => {
  return (
    <div className="pt-12">
      <p className="text-sm font-normal text-black dark:text-white">
        <span className="text-[#7D8184]">Home /</span> Order
      </p>
      <div className="flex flex-col justify-center items-center py-44">
        <h4 className="text-9xl mb-6">Order Done</h4>
        <Button>
          <NavLink to={"/"}>Go To Home Page</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default AllOrders;
