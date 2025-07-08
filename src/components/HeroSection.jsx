import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center pt-20 px-4">
      <div className="flex flex-col gap-5 my-10">
        <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 educators Job Website
        </span>
        <h1 className="text-5xl font-bold text-[#0d22d6]">
          Helping educators <br />
          find local <span className="text-[#07b521]">teaching jobs.</span>
        </h1>
        <h4
          className="text-2xl"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          "Empowering Educators, Connecting Communities"
        </h4>

        <p className="text-[#24529c] italic font-bold ">
          {" "}
          Discover teaching opportunities right in your neighborhood. Whether
          you're a passionate tutor, a skilled subject teacher, or an
          experienced educator, our platform helps you connect with schools,
          institutions, and parents nearby looking for your talent.
        </p>
        <p>
          <strong>Start your journey today —</strong>{" "}
          <span className="italic">
            because great teachers deserve great opportunities, close to home.
          </span>
        </p>

        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#07b521]"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
