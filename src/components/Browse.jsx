import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hookes/useGetAllJobs';

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 pt-20 px-4">
        <h1 className="font-bold text-2xl sm:text-3xl mb-6 text-center sm:text-left">
          Search Results ({allJobs.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allJobs.map((job) => (
            <div
              key={job._id}
              className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl rounded-md"
            >
              <Job job={job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
