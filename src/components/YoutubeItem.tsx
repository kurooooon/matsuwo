import React, { useCallback } from 'react';
import YouTube from 'react-youtube';
import styled from '@emotion/styled';
import Lazy from './Lazy';
import { useTrackGA } from '../hooks/useTrackGA';

const Title = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
`;

type Props = {
  id: string;
  title: string;
};

const YoutubeItem = ({ id, title }: Props) => {
  const trackGA = useTrackGA();
  const onPlay = useCallback(() => {
    trackGA({
      event: 'playYoutube',
      id,
      title,
    });
  }, [id, title]);
  return (
    <div>
      <Lazy triggerOnce rootMargin="100px 0px">
        <YouTube opts={{ width: '100%' }} videoId={id} onPlay={onPlay} />
      </Lazy>
      <Title>{title}</Title>
    </div>
  );
};

const areEquals = (prev: Props, next: Props) =>
  prev.id === next.id && prev.title === next.title;

export default React.memo(YoutubeItem, areEquals);
