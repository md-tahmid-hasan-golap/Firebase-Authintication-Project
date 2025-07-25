import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();

  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filterNews);
    }
  }, [id, data]);

  return (
    <div>
      <h2>
        CategoryNews - <strong>{categoryNews.length}</strong> news found
      </h2>
      <div className="grid grid-cols-1 gap-1">
        {categoryNews.map((news) => (
          <NewsCard key={news} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
