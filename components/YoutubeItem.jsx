import React from 'react';
import YouTube from 'react-youtube';
import styled from '@emotion/styled';
import Lazy from './Lazy';

const Title = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
`;

const YoutubeItem = React.memo(function Presenter ({ id, title }) {
  return (
    <div>
      <Lazy triggerOnce rootMargin='100px 0px'>
        <YouTube opts={{width: '100%'}} videoId={id} />
      </Lazy>
      <Title>{title}</Title>
    </div>
  );
}, (prevProps, nextProps) =>
  prevProps.id === nextProps.id &&
  prevProps.title === nextProps.title
)

export default YoutubeItem;