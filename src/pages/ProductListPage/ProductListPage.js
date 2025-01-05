import React, { useEffect, useState } from "react";
import FilterIcon from "../../components/common/FilterIcon";
import Categories from "../../components/Filters/Categories";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../api/fetchProducts";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/features/common";
import { fetchCategoryByID } from "../../api/fetchCategories";
import UseDebounce from "../../hooks/UseDebounce"

const ProductListPage = ({ categoryType }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [value, setValue] = useState("")
  const debounced = UseDebounce(value, 400)

  useEffect(() => {
    getAllProducts(
      categoryType === "MEN"
        ? "2645f58b-ba0c-4a99-b08d-fe5c78bbebca"
        : "f7085077-de17-4f14-abee-7e0cb07c3bf8"
    )
      .then(dispatch(setLoading(true)))
      .then((res) => {
        setData(res);
      })
      .catch((err) => {})
      .finally(() => {
        dispatch(setLoading(false));
      });
    fetchCategoryByID(
      categoryType === "MEN"
        ? "2645f58b-ba0c-4a99-b08d-fe5c78bbebca"
        : "f7085077-de17-4f14-abee-7e0cb07c3bf8"
    )
      .then(dispatch(setLoading(true)))
      .then((res) => {
        setCategoryTypes(res);
      })
      .catch((err) => {})
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [categoryType, dispatch]);

  useEffect(() => {
    let filteredProducts = data;
  
    if (selectedIds.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        selectedIds.includes(item.categoryTypeId)
      );
    }
  
    if (debounced) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(debounced.toLowerCase())
      );
    }
  
    setProducts(filteredProducts);
  }, [data, debounced, selectedIds]);
  
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] p-[10px] border rounded-lg m-[20px]">
          {/* Filters */}
          <div className="flex justify-between ">
            <p className="text-[16px] text-gray-600">Filter</p>
            <FilterIcon />
          </div>
          <div className="border rounded flex mt-5 overflow-hidden">
            <div className="flex items-center justify-center px-4 border-1">
              <svg
                className="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
              <input
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="Search"
                onChange={(e) => {
                  setValue(e.target.value);
              }}
              />
            </div>
          </div>
          <div>
            {/* Product types */}
            <p className="text-[16px] text-black mt-5">Thể loại</p>
            <Categories
              setSelectedIds={(selectedIds) => setSelectedIds(selectedIds)}
              types={categoryTypes?.categoryTypes}
            />
          </div>
        </div>

        <div className="p-[15px]">
          <p className="text-black text-2xl font-bold ml-2">
            Dành Cho {categoryType === "MEN" ? "Nam" : "Nữ"}
          </p>
          {/* Products */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-24 px-2">
            {products?.map((item, index) => (
              <ProductCard
                key={item?.id + "_" + index}
                {...item}
                title={item?.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
