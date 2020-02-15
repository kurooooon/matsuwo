import React from 'react';
import YouTube from 'react-youtube';

const YoutubeItem = React.memo(function Presenter ({ id }) {
  return <YouTube opts={{width: '100%'}} videoId={id} />
}, (prevProps, nextProps) =>
  prevProps.id === nextProps.id
)

export default YoutubeItem;