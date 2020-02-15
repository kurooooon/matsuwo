import React from 'react';
import { InView } from 'react-intersection-observer'

const Lazy = function Lazy({ children, rootMargin, triggerOnce }) { 
  return (
    <InView triggerOnce={triggerOnce} rootMargin={rootMargin}>
      {({ inView, ref }) => (
        <div ref={ref}>{inView ? children : null}</div>
      )}
    </InView>
  );
}

export default Lazy