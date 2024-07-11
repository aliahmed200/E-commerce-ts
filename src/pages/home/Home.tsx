import axios from "axios";
import { useQuery } from "react-query";
import { Icategory } from "../../components/interfaces";
import MainSection from "./MainSection";
import ImageSection from "./ImageSection";
import CategoryBoxSection from "./CategoryBoxSection";
import ProductSection from "./ProductSection";
import CircleSection from "./CircleSection";
import SectionTitle from "../../components/ui/SectionTitle";

const fetchCategories = async (): Promise<Icategory[]> => {
  const { data } = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/categories`
  );
  return data.data;
};

const Home = () => {
  const { data: categories, isLoading: categoriesLoading } = useQuery<
    Icategory[]
  >("categories", fetchCategories);

  return (
    <>
      <MainSection
        categories={categories || []}
        categoriesLoading={categoriesLoading}
      />
      <CategoryBoxSection />
      <ImageSection />
      <ProductSection
        numberShow={8}
        sectionTitle={
          <SectionTitle
            title="Our Products"
            secondTitle="Explore Our Products"
          />
        }
      />
      <div className="py-12">
        <CircleSection />
      </div>
    </>
  );
};

export default Home;
