import contact from "../../assets/About/happy-young-man-going-shopping-holding-bags-looking-excited-standing-orange-sweater-standing-against-turquoise-wall.jpg";
import Circle from "../../components/ui/Circle";
import { CIRCLE_ABOUT_INFO, EMPLOYEE_INFO } from "../../components/data";
import CircleSection from "../home/CircleSection";
interface Iprops {}

const About = ({}: Iprops) => {
  return (
    <div className="py-12">
      <p className="text-sm font-normal text-black dark:text-white mb-12">
        <span className="text-[#7D8184]">Home /</span> About
      </p>
      <div className="flex justify-between items-center gap-x-12 mb-12">
        <div className="flex-1 -mt-12">
          <h4 className="text-5xl font-semibold mb-4">Our Story</h4>
          <div className="w-[89%] font-light">
            <p className=" mb-2">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <img
          className="w-[600px] rounded flex-1"
          src={contact}
          alt="shopping"
        />
      </div>
      <div className="flex justify-around mb-12">
        <div className="border border-gray-500 flex w-full py-6 justify-between items-center rounded">
          {CIRCLE_ABOUT_INFO.map((item, index) => (
            <Circle
              key={index}
              icon={item.icon}
              mainTitle={item.mainTitle}
              secondTitle={item.secondTitle}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-evenly mb-12">
        {EMPLOYEE_INFO.map((item, index) => (
          <div key={index} className="space-y-2">
            <img className="rouned w-[330px]" src={item.image} alt="person" />
            <h5 className="text-xl font-bold">{item.name}</h5>
            <p className="text-md font-light">{item.job}</p>
            {item.icons}
          </div>
        ))}
      </div>
      <div className="flex justify-around mb-12">
          <CircleSection />
      </div>
    </div>
  );
};

export default About;
