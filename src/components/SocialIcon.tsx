import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useTrackGA } from '../hooks/useTrackGA';

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

type Props = {
  children: React.ReactNode;
  id: string;
  label: string;
  link: string;
};

const SocialIcon = ({ id, link, label, children }: Props) => {
  const trackGA = useTrackGA();
  const onClick = useCallback(() => {
    trackGA({
      event: 'clickSocial',
      id,
    });
  }, [id]);
  return (
    <li>
      <FooterLink
        href={link}
        target="_blank"
        aria-label={label}
        onClick={onClick}
      >
        {children}
      </FooterLink>
    </li>
  );
};

const areEquals = (prev: Props, next: Props) =>
  prev.children === next.children &&
  prev.id === next.id &&
  prev.label === next.label &&
  prev.link === next.link;

export default React.memo(SocialIcon, areEquals);
