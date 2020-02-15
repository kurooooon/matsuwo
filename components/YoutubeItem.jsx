import React from 'react';
import YouTube from 'react-youtube';

const YoutubeItem = function Presenter ({ id }) {
  return <YouTube opts={{width: '100%'}} videoId={id} />
}

export default YoutubeItem;