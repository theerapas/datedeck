import React from "react";

const Test = () => {
  return (
    <div className="bg-pink-200 text-white bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center"
    style={{
        backgroundImage:
          "url('https://w.wallhaven.cc/full/v9/wallhaven-v9zw1l.jpg') ",
      }}
    >
    
        
       
        <div className="bg-pink-200 w-[767px] h-screen shadow-md bg-no-repeat bg-cover bg-center">
          {" "}
          {/* Example content div */}
          <h2 className="text-xl font-semibold mb-2">Section 1</h2>
          <p>
            This is the content for section 1. It will be within a white box
            with some padding and rounded corners.
          </p>
        </div>
        
        
      
    </div>
  );
};

export default Test;
