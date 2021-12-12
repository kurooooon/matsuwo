import { css } from '@emotion/react';
import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Content = ({ children, ...rest }: Props) => {
  return (
    <div
      css={css`
        max-width: 1000px;
        margin: 0 auto;
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
