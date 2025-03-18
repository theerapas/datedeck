'use client'
import React, { useEffect, useState } from 'react';

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${isVisible ? 'fade-in' : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition; 