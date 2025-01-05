import React from "react";
import SectionHeading from "../SectionsHeading/SectionHeading";
import ProductCard from "../../../pages/ProductListPage/ProductCard";

const Category = ({ title, data }) => {

  const limitedData = data?.slice(0, 5);
  return (
    <>
      <SectionHeading title={title} />
      <div className='py-10 ml-14 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-24 px-2'>
      {limitedData?.map((item, index) => (
              <ProductCard
                key={item?.id + "_" + index}
                {...item}
                title={item?.name}
              />
            ))}
      </div>
    </>
  );
};

export default Category;
