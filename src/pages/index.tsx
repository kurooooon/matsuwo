import React, { useEffect, useMemo } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { format } from 'date-fns';
import ja from 'date-fns/locale/ja';
import Lazy from '../components/Lazy';
import { About, Footer, Work } from '../components/modules';
import { SectionHeader } from '../components/SectionHeader';
import { Music, Art, News } from '../@types/type';
import { Content } from '../components/Content';

const SectionCss = css`
  padding: 6rem 0 4rem 0;

  @media (max-width: 1140px) {
    padding: 4rem 1rem 2rem;
  }
  @media (max-width: 980px) {
    padding: 5rem 3rem 3rem 3rem;
  }
  @media (max-width: 736px) {
    padding: 3rem 1.5rem 1rem 1.5rem;
  }
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const Header = styled.section`
  padding: 4rem 2rem 4rem 2rem;
  height: 90vh;
  background-color: #4686a0;
  color: rgba(255, 255, 255, 0.75);
  background-attachment: fixed, fixed, fixed;
  background-image: url('https://res.cloudinary.com/kurooooon/image/upload/f_auto/v1579369001/matsuwo/header_ylfwfi.jpg');
  background-position: top;
  overflow: hidden;
  position: relative;
  text-align: center;
  background-color: #000000dd;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1140px) and (-webkit-min-device-pixel-ratio: 0) {
    background-attachment: scroll;
  }
`;

const HeadTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-family: 'Roboto Slab', serif;
  font-size: 60px;
  margin: 0;
  color: #fff;
  word-break: keep-all;
  font-display: swap;

  @media screen and (min-width: 480px) {
    font-size: 150px;
  }
`;

const NewsWrapper = styled.ul`
  margin: 0;
  padding-left: 1rem;
`;

const NewsItem = styled.li`
  list-style: none;
  padding-left: 0.5rem;

  p {
    margin: 0 0 2rem 0;
    font-size: 1rem;

    @media (min-width: 480px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1140px) {
      font-size: 1.2rem;
    }
  }
`;

const NewSection = styled.section`
  ${SectionCss};
`;

export const getStaticProps = async () => {
  const { env } = process;

  const data = await Promise.all([
    fetch(`https://script.google.com/macros/s/${env.MUSIC_SHEET_KEY}/exec`),
    fetch(`https://script.google.com/macros/s/${env.NEWS_SHEET_KEY}/exec`),
    fetch(`https://script.google.com/macros/s/${env.ART_SHEET_KEY}/exec`),
  ]);
  const musicList = await data[0].json();
  const newsData = await data[1].json();
  const artList = await data[2].json();

  return {
    props: {
      musicList,
      news: newsData,
      artList,
    },
  };
};

type Props = {
  news: News[];
  musicList: Music[];
  artList: Art[];
};

const IndexPage = ({ news, musicList, artList }: Props) => {
  useEffect(() => {
    if (typeof window == 'undefined') {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any) {
      if (window.dataLayer) {
        window.dataLayer.push(arguments);
      }
    }
    gtag('js', new Date());

    gtag('config', process.env.NEXT_PUBLIC_GA_ID);
  }, []);
  const renderedNews = useMemo(() => {
    if (!news) {
      return;
    }
    const items = news.map((item) => {
      if (!item.description) {
        return null;
      }
      const date = format(new Date(item.date), 'yyyy MM/dd(EEEEE)', {
        locale: ja,
      });
      return (
        <NewsItem key={item.id}>
          {item.link ? (
            <p>
              <a href={item.link} target="_blank" rel="noreferrer">
                {date} {item.description}
              </a>
            </p>
          ) : (
            <p>
              {date} {item.description}
            </p>
          )}
        </NewsItem>
      );
    });
    return <NewsWrapper>{items}</NewsWrapper>;
  }, [news]);

  return (
    <>
      <Head>
        <title>matu officail site | music &amp; art artist</title>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        ></script>
      </Head>
      <main>
        <Header>
          <HeadTitle>matu</HeadTitle>
        </Header>

        <Content>
          <NewSection>
            <SectionHeader>
              <h2>What's New</h2>
            </SectionHeader>
            {renderedNews}
          </NewSection>

          <Lazy triggerOnce rootMargin="300px 0px">
            <Work musicList={musicList} artList={artList} />
          </Lazy>
        </Content>

        <Lazy triggerOnce rootMargin="300px 0px">
          <About />
        </Lazy>

        <Footer />
      </main>
    </>
  );
};

export default IndexPage;
