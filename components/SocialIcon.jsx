import React, { useCallback } from 'react';
import styled from "@emotion/styled";

const FooterLink = styled.a`
  font-size: 1rem;
  border-bottom: none;

  @media (min-width: 480px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1140px) {
    font-size: 1.2rem;
  }
`;

export const SocialIcon = React.memo(function Presenter({
    id,
    link,
    label,
    children
  }) {
  const onClick = useCallback(() => {
    window.dataLayer.push({
      event: 'clickSocial',
      id
    })
  }, [id]);
  return (
    <li>
      <FooterLink
        href={link}
        target="_blank"
        aria-label={label}
        onClick={onClick}
      >{children}</FooterLink>
    </li>
  )
}, (prevProps, nextProps) =>
  prevProps.id === nextProps.id &&
  prevProps.title === nextProps.title &&
  prevProps.url === nextProps.url &&
  prevProps.children === nextProps.children
);