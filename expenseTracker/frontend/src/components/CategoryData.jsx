import axios from "axios";
import EyeIcon from "./categoryIcons/EyeIcon";
import { useEffect, useState } from "react";

export default function CategoryData() {
  const api = "http://localhost:8001/category";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(api);
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {categories.map((el) => (
        <div key={el.id} className="flex gap-[8px] h-[32px] items-center px-[12px] text-black">
          <EyeIcon />
          {el.name}
        </div>
      ))}
      
    </div>
  );
}
