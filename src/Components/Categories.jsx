import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromised = fetch("categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromised);
  console.log(categories);
  return (
    <div>
      <h2 className="font-bold">All Caterogy ({categories.length})</h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((categori) => (
          <NavLink
            to={`/category/${categori.id}`}
            key={categori.id}
            className={
              "btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"
            }
          >
            {categori.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
