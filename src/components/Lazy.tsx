import React from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  rootMargin: string;
  triggerOnce: boolean;
};

const Lazy = ({ children, rootMargin, triggerOnce }: Props) => {
  const [ref, inView] = useInView({
    rootMargin,
    triggerOnce,
  });
  return <div ref={ref}>{inView ? children : null}</div>;
};

export default Lazy;
