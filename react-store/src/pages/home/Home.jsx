import React, { useEffect, useState } from "react";
import Sceleton from "../../components/sceleton/Sceleton";
import ProductCard from "../../components/productCard/ProductCard";

import axios from "axios";

const Home = () => {
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setIsloading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.status !== 200) {
          throw new Error(`Произошла ошибка ${response.status}`);
        }
        setData(response.data);
        setIsloading(false);
      } catch (err) {
        alert(err.message);
      }
    }
    getData();
  }, []);

  return (
    <div>{isloading ? <Sceleton /> : <ProductCard products={data} />}</div>
  );
};

export default Home;
