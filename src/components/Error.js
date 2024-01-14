import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      Something Went Wrong..!
      <div>
        {err.status}: {err.statusText}
      </div>
    </div>
  );
};

export default Error;
