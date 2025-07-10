import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Mathematics",
  "Science",
  "English",
  "Social Studies",
  "Hindi",
  "Principle",
  "Physical & Health Education",
  "Computer Science / I.T.",
  "Home Science",
  "Art / Drawing",
  "Urdu",
  "Sanskrit",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 my-10">
      <Carousel className="max-w-6xl mx-auto">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full w-full max-w-[200px] text-center text-sm sm:text-base px-4 py-2 truncate"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
