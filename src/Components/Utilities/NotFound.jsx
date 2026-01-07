import React from "react";

const NotFound = ({
  title = "Not found",
  message = "The requested content could not be found.",
}) => {
  return (
    <div className="my-5 mx-13 lg:mx-22.5 flex flex-col items-center text-center gap-3">
      <h2 className="font-primary font-extrabold text-[22px] md:text-[26px]">
        {title}
      </h2>
      <p className="font-primary text-[14px] md:text-[16px] opacity-60 max-w-xl">
        {message}
      </p>
    </div>
  );
};

export default NotFound;
