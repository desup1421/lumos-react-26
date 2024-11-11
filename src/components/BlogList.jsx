import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const BlogList = ({ title = "Default", data }) => {
	const navigate = useNavigate();
  return (
    <section className="my-10">
      <div className="border-2 border-b-green-500 border-x-0 border-t-0">
        <h2 className="text-l font-bold text-white bg-green-500 py-1 px-3 inline-block">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-2">
				{
					data.map((item, index) => (
						<div key={index} onClick={() => navigate(`/post/${item.slug}`)} className="group cursor-pointer my-2 ">
							<div className="rounded-lg overflow-hidden">
								<Card image={item.image} tag={title} />
							</div>
							<p className="line-clamp-3 font-semibold mt-1 group-hover:text-blue-500">{item.text}</p>
							<p className="text-xs font-semibold text-gray-500">{item.date}</p>
						</div>
					))
				}
      </div>
    </section>
  );
};

export default BlogList;
