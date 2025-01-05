import React from "react";

const Categories = ({ types , setSelectedIds }) => {

  const handleCheckboxChange = (typeId) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(typeId)) {
        // Bỏ chọn: Loại bỏ id khỏi danh sách
        return prevSelectedIds.filter((id) => id !== typeId);
      } else {
        // Chọn: Thêm id vào danh sách
        return [...prevSelectedIds, typeId];
      }
    });
  };

  return (
    <div>
      {types?.map((type) => {
        return (
          <div className="flex items-center p-1">
            <input
              type="checkbox"
              name={type?.code}
              className="border rounded-xl w-4 h-4 accent-black text-black"
              onChange={() => handleCheckboxChange(type?.id)}
            />
            <label
              htmlFor={type?.code}
              className="px-2 text-[14px] text-gray-600"
            >
              {type?.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
