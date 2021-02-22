import React, { useCallback } from 'react';
import { Image } from 'cloudinary-react';
import styled from '@emotion/styled';
import Lazy from './Lazy';
import { useTrackGA } from '../hooks/useTrackGA';

const Art = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ArtTitle = styled.p`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 1.1rem;
  width: 100%;
`;

const ArtLink = styled.a`
  border: none;
`;

type Props = {
  id: string;
  title: string;
  url: string;
};

const ArtItem = ({ id, title, url }: Props) => {
  const trackGA = useTrackGA();
  const onClick = useCallback(() => {
    trackGA({
      event: 'clickArt',
      id,
      title,
    });
  }, [id, title, url]);
  return (
    <Art key={id}>
      <ArtLink onClick={onClick} href={url} target="_blank">
        <Lazy triggerOnce rootMargin="100px 0px">
          <Image
            cloudName="kurooooon"
            publicId={`matsuwo/art/${id}`}
            width="100%"
            secure={true}
            alt=""
          />
        </Lazy>
        <ArtTitle>{title}</ArtTitle>
      </ArtLink>
    </Art>
  );
};

const areEquals = (prev: Props, next: Props) =>
  prev.id === next.id && prev.title === next.title && prev.url === next.url;

export default React.memo(ArtItem, areEquals);
