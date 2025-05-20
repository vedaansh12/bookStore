import React from "react";

function Card({item}) {
  return (
    <>
    <div className="mt-4 my-3">
        <div className="card w-92 p-3  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>
          {item.title}
          </p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline dark:bg-slate-900 dark:text-white">${item.price}</div>
            <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline dark:bg-slate-900 dark:text-white hover:bg-pink-500 hover:text-white duration-200 dark:hover:bg-pink-500 text-white">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;
