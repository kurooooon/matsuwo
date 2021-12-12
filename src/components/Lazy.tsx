import React, { HTMLAttributes } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  rootMargin: string;
  triggerOnce: boolean;
}

const Lazy = ({ children, rootMargin, triggerOnce, ...rest }: Props) => {
  const [ref, inView] = useInView({
    rootMargin,
    triggerOnce,
  });
  return (
    <div ref={ref} {...rest}>
      {inView ? children : null}
    </div>
  );
};

export default Lazy;
