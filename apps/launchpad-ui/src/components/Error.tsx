import React from "react";

const Error = ({ message }: { message: string }) => {
  return (
    <div className="bg-gray-800/50 border-2 rounded-md px-8 py-4 border-gray-700 text-red-600 ">
      {message}
    </div>
  );
};

export default Error;
