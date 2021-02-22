import React from 'react';
import { useInView } from 'react-intersection-observer'

const Lazy = ({ children, rootMargin, triggerOnce }) => { 
  const [ref, inView] = useInView({
    rootMargin,
    triggerOnce
  });
  return (
    <div ref={ref}>{inView ? children : null}</div>
  );
}

export default Lazy