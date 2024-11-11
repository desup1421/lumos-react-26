import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router";

const Hero = ({data}) => {
  const navigate = useNavigate();
  return (
    <section className="grid grid-cols-12 gap-1">
      {
        data.map((item, index) => (
          <div key={index} onClick={() => navigate(`/post/${item.slug}`)} className={`group cursor-pointer ${index === 0 ? 'row-span-2 col-span-12 lg:col-span-6' : index === 1 ?'col-span-4 lg:col-span-6': 'col-span-4 lg:col-span-3'}`}>
            <Card
              image={item.image}
              text={item.text}
              date={index === 0 && item.date}
            />
          </div>
        ))
      }
    </section>
  );
};

export default Hero;
