import React from 'react';
import YouTube from 'react-youtube';
import styled from '@emotion/styled';

const Title = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
`;

const YoutubeItem = React.memo(function Presenter ({ id, title }) {
  return (
    <>
      <YouTube opts={{width: '100%'}} videoId={id} />
      <Title>{title}</Title>
    </>
  );
}, (prevProps, nextProps) =>
  prevProps.id === nextProps.id &&
  prevProps.title === nextProps.title
)

export default YoutubeItem;