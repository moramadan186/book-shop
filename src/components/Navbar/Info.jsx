import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
const Info = () => {
  return (
    <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div>
        <HeartIcon className="block w-6 text-gray-300" />
      </div>
      <div className="rounded-full flex justify-center items-center min-h-[2rem] min-w-[2rem] ml-5 text-light bg-primary-200">
        {"0"}
      </div>
      <div className="ml-5 relative font-medium text-gray-300">EN</div>
    </div>
  );
};

export default Info;
