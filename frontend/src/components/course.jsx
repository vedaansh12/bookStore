import React, { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios"
import { Link } from "react-router-dom";

function Course() {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
        try {
          const res = await axios.get("http://localhost:4001/book");
          console.log(res.data)
          setBook(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    getBook();
  },[])
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:20px px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here !! :</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede
            justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
