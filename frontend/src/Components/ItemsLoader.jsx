import React from "react";
import {Typography} from "@material-tailwind/react";

const ItemsLoader = () => {
  return (
    <div className="itemsloader" style={{
        width: '100',
    }}>
      <div className="max-w-full grid gap-1 animate-pulse p-6">
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-8 w-56 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-8 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-8 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-8 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-8 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>
    </div>
  );
};

export default ItemsLoader;
