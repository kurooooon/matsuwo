import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { Image } from "cloudinary-react";
import Footer from '../components/Footer';
import { YoutubeItem } from '../components/YoutubeItem';
import { ArtItem } from '../components/ArtItem';
import Lazy from '../components/Lazy';

const SectionCss = css`
  padding: 6rem 0 4rem 0;

  @media (max-width: 1140px) {
    padding: 4rem 1rem 2rem ;
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
  background-attachment: fixed,	fixed, fixed;
  background-image: url("https://res.cloudinary.com/kurooooon/image/upload/v1579369001/matsuwo/header_ylfwfi.jpg"); 
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
  font-family: "Roboto Slab", serif;
  font-size: 60px;
  margin: 0;
  color: #fff;
  word-break: keep-all;
  font-display: swap;

  @media screen and (min-width: 480px) {
    font-size: 150px;
  }
`;

const SectionHeader = styled.header`
  text-align: center;
  margin: 0 0 1rem 0;

  h2 {
    margin: 0;
    font: inherit;
    color: ${props => props.inverse
      ? "#fff"
      : "#555"};
    line-height: 1.35rem;
    font-size: 1.4rem;
    font-weight: 200;

    @media (min-width: 480px) {
      font-size: 2rem;
      line-height: 2.9rem;
    }

    @media (min-width: 1140px) {
      font-size: 2.2rem;
      line-height: 3.15rem;
    }
  }

  :after {
    background: ${props => props.inverse
      ? "#ffffff"
      : "#90909080"
    };
    content: '';
    display: inline-block;
    height: 1px;
    margin-top: 1.5rem;
    width: 6rem;
  }
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

const WorkLink = styled.a`
  text-align: right;
  display: block;
  border: none;
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

const ProfileImageWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
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

const AboutWrapper = styled.section`
  ${SectionCss}
  position: relative;
  background-color: #333;
  color: rgba(255, 255, 255, 0.75);
  background-attachment: fixed,	fixed;
  background-image: url("https://res.cloudinary.com/kurooooon/image/upload/v1579369001/matsuwo/back_wqixtg.jpg");
  z-index: 0;
  overflow: hidden;
  background-color: #000000dd;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  @media (max-width: 1140px) and (-webkit-min-device-pixel-ratio: 0) {
    background-attachment: scroll;
  }

  ::before {
    content: '';
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
    background: inherit;
    filter: blur(10px);
    z-index: -1;
  }

  a {
    border-bottom-color: rgba(255, 255, 255, 0.5);
  }

  a:hover {
    color: #ffffff;
  }

  h1, h2, h3, h4, h5, h6, strong, b {
    color: #ffffff;
  }

  header p {
    color: #ffffff;
  }

  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button,
  .button {
    box-shadow: inset 0 0 0 1px #ffffff;
    color: #ffffff !important;
  }

  input[type="submit"]:hover,
  input[type="reset"]:hover,
  input[type="button"]:hover,
  button:hover,
  .button:hover {
    background-color: rgba(255, 255, 255, 0.125);
  }

  input[type="submit"]:active,
  input[type="reset"]:active,
  input[type="button"]:active,
  button:active,
  .button:active {
    background-color: rgba(255, 255, 255, 0.25);
  }

  input[type="submit"].primary,
  input[type="reset"].primary,
  input[type="button"].primary,
  button.primary,
  .button.primary {
    background-color: #ffffff;
    box-shadow: inset 0 0 0 1px #ffffff !important;
    color: #333 !important;
  }

  input[type="submit"].primary:hover,
  input[type="reset"].primary:hover,
  input[type="button"].primary:hover,
  button.primary:hover,
  .button.primary:hover {
    background-color: rgba(255, 255, 255, 0.125) !important;
    color: #ffffff !important;
  }

  input[type="submit"].primary:active,
  input[type="reset"].primary:active,
  input[type="button"].primary:active,
  button.primary:active,
  .button.primary:active {
    background-color: rgba(255, 255, 255, 0.25) !important;
  }

  ul.major-icons li .icon {
    border-color: #ffffff;
  }

  .icon.major {
    color: #ffffff;
  }
`;

const AboutContainer = styled.div`
  @media (min-width: 1140px) {
    margin: 0 auto;
    max-width: calc(100% - 4em);
    width: 60em;
  }
`;

const AboutInnerWrapper = styled.div`
  background-color: #00000099;
  padding: 20px;
`;

const NewSection = styled.section`
  ${SectionCss};
`;

const NewContainer = styled.section`
  @media (min-width: 1140px) {
    margin: 0 auto;
    max-width: calc(100% - 4em);
    width: 60em;
  }
`;

const WorksSection = styled.section`
  ${SectionCss};

  @media (min-width: 1140px) {
    max-width: calc(100% - 4em);
    margin: auto;
    width: 60em;
  }
`;

const AboutDescription = styled.div`
  font-size: 1rem;

  @media (min-width: 480px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1140px) {
    width: 50%;
    padding-left: 3rem;
  }
`;

const Row = styled.div`
  @media (min-width: 1140px) {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
  }
`;

const Col = styled.div`
  @media (min-width: 1140px) {
    width: 50%;
  }
`;

const injectGA = () => {
  if (typeof window == "undefined") {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", GA_ID);
};

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const { env } = process;

    const youtubeObj = await fetch(
      `https://script.google.com/macros/s/${env.MUSIC_SHEET_KEY}/exec`
    );
    const musicList = await youtubeObj.json();

    const newsObj = await fetch(
      `https://script.google.com/macros/s/${env.NEWS_SHEET_KEY}/exec`
    );
    const newsData = await newsObj.json();

    const artObj = await fetch(
      `https://script.google.com/macros/s/${env.ART_SHEET_KEY}/exec`
    );
    const artList = await artObj.json();

    return {
      musicList,
      news: newsData,
      artList
    };
  }

  renderNews() {
    const { news } = this.props;
    if (!news) {
      return;
    }
    const items = news.map(item => {
      if (!item.description) {
        return null;
      }
      const date = format(new Date(item.date), "yyyy MM/dd(EEEEE)", {
        locale: ja
      });
      return (
        <NewsItem key={item.id}>
          {item.link ? (
            <p>
              <a href={item.link} target="_blank">{date} {item.description}</a>
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
  }

  renderYouTube() {
    const { musicList } = this.props;
    if (!musicList) {
      return null;
    }
    return (
      <YoutubeWrapper>
        {musicList.map(({id, title}) => (
          <YoutubeItem key={id} id={id} title={title} />
        ))}
      </YoutubeWrapper>
    );
  }

  renderArt() {
    const { artList } = this.props;
    if (!artList) {
      return null;
    }
    return (
      <ArtWrapper>
        {artList.map(({id, title, url}) => 
        <ArtItem key={id} id={id} title={title} url={url} />
      )}
      </ArtWrapper>
    );
  }

  render() {
    return (
      <>
        <Head>
          <title>matsuwo / 松尾竜平 officail site | music &amp; art artist</title>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-156990344-1"
          ></script>
          <script>{injectGA()}</script>
        </Head>
        <main>
          <Header>
            <HeadTitle>matsuwo</HeadTitle>
          </Header>

          <NewSection>
            <NewContainer>
              <SectionHeader>
                <h2>What's New</h2>
              </SectionHeader>
              {this.renderNews()}
            </NewContainer>
          </NewSection>

          <WorksSection>
            <div>
              <SectionHeader>
                <h2>Music</h2>
              </SectionHeader>
              {this.renderYouTube()}
              <p>
                <WorkLink
                  href="https://www.youtube.com/channel/UCRSPD9OHzBjDfY9EFE4hDHw"
                  target="_blank"
                >
                  ...more
                </WorkLink>
              </p>
              <SectionHeader>
                <h2>Art</h2>
              </SectionHeader>
              {this.renderArt()}
              <p>
                <WorkLink
                  href="https://www.saatchiart.com/account/profile/218701"
                  target="_blank"
                >
                  ...more
                </WorkLink>
              </p>
            </div>
          </WorksSection>

          <AboutWrapper>
            <AboutContainer>
              <AboutInnerWrapper>
                <SectionHeader inverse>
                  <h2>About</h2>
                </SectionHeader>
                <Row>
                  <Col>
                    <ProfileImageWrapper>
                      <Lazy triggerOnce rootMargin='100px 0px'>
                        <Image
                          cloudName="kurooooon"
                          publicId="matsuwo/profile_wkgtbv"
                          width="100%"
                          height="100%"
                          alt=""
                          secure={true}
                        />
                      </Lazy>
                    </ProfileImageWrapper>
                  </Col>
                  <AboutDescription>
                    <p>matsuwo / 松尾竜平</p> 
                    <p>
                      北海道札幌での
                      <a
                        href="https://www.saatchiart.com/account/profile/218701"
                        target="_blank"
                      >
                        アート
                      </a>
                      の制作や個展、音楽制作やライブ活動を精力的に行い、2019年春より東京での活動をスタート。
                      2013年matsuwo名義で
                      <a
                        href="https://tower.jp/artist/2149889/matsuwo"
                        target="_blank"
                      >
                        宅録CD
                      </a>
                      をリリース。
                    </p>
                    <p>
                      歌詞と曲は心揺さぶられるできごと作品や言葉などありふれた日常の中からインスパイアされ主にJ-popの曲をlogic
                      proやProtoolsで制作しており、音はいたってシンプルで分厚く重ねない。
                      影響されたアーティストはゆず、ミスターチルドレン、サザンオールスターズ、宇多田ヒカルなどなど。
                      ライブでは主にアコースティックギターの弾き語り形式で演奏。
                      使用アコースティックギターはリサイクルショップで購入した1560円のモーリス。
                      今まで使ってきたどれよりも弾きやすい。
                    </p>
                    <p>
                      アートでは油絵を制作してイタリア、フランス、ニューヨークの展覧会やアートインレジデンスを経験後、音楽ジャケットやチラシのアートワークを担当したりアートフェアや個展などで絵画を発表している。
                    </p>
                  </AboutDescription>
                </Row>
              </AboutInnerWrapper>
            </AboutContainer>
          </AboutWrapper>

          <Footer />
        </main>
      </>
    );
  }
}
