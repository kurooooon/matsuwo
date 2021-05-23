import styled from '@emotion/styled';
import { useMemo } from 'react';
import { Art, Music } from '../@types/type';
import ArtItem from './ArtItem';
import Lazy from './Lazy';
import { SectionCss } from './Section';
import { SectionHeader } from './SectionHeader';
import YoutubeItem from './YoutubeItem';

const WorksSection = styled.section`
  ${SectionCss};

  @media (min-width: 1140px) {
    max-width: calc(100% - 4em);
    margin: auto;
    width: 60em;
  }
`;

const WorkLink = styled.a`
  text-align: right;
  display: block;
  border: none;
`;

const YoutubeWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 8px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }
`;

const ArtWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 8px;
  grid-template-columns: 1fr;

  @media (min-width: 736px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }

  @media (min-width: 1140px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
`;

interface Props {
  musicList: Music[];
  artList: Art[];
}

const Work = ({ musicList, artList }: Props) => {
  const renderedYouTube = useMemo(() => {
    if (!musicList) {
      return null;
    }
    return (
      <YoutubeWrapper>
        {musicList.map(({ id, title }) => (
          <YoutubeItem key={id} id={id} title={title} />
        ))}
      </YoutubeWrapper>
    );
  }, [musicList]);

  const renderedArt = useMemo(() => {
    if (!artList) {
      return null;
    }
    return (
      <ArtWrapper>
        {artList.map(({ id, title, url }) => (
          <ArtItem key={id} id={id} title={title} url={url} />
        ))}
      </ArtWrapper>
    );
  }, [artList]);

  return (
    <WorksSection>
      <Lazy triggerOnce rootMargin="300px 0px">
        <SectionHeader>
          <h2>Music</h2>
        </SectionHeader>
        {renderedYouTube}
        <p>
          <WorkLink
            href="https://www.youtube.com/channel/UCRSPD9OHzBjDfY9EFE4hDHw"
            target="_blank"
          >
            ...more
          </WorkLink>
        </p>
      </Lazy>
      <Lazy triggerOnce rootMargin="300px 0px">
        <SectionHeader>
          <h2>Art</h2>
        </SectionHeader>
        {renderedArt}
        <p>
          <WorkLink
            href="https://www.saatchiart.com/account/profile/218701"
            target="_blank"
          >
            ...more
          </WorkLink>
        </p>
      </Lazy>
    </WorksSection>
  );
};

export default Work;
