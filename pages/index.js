import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import YouTube from "react-youtube";
import styled from "styled-components";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Image } from "cloudinary-react";

import "../static/assets/css/main.css";

const Header = styled.section`
  height: 90vh;
  background-color: #4686a0;
  color: rgba(255, 255, 255, 0.75);
  background-attachment: fixed, fixed, fixed;
  background-image: url("../../images/header.jpg");
  background-position: top;
  overflow: hidden;
  position: relative;
  text-align: center;
  background-color: #000000dd;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 374px) {
    background-position: top right -210px;
  }
`;

const HeadTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-family: "Roboto Slab", serif;
  font-size: 60px;

  @media screen and (min-width: 480px) {
    font-size: 150px;
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

const YouTubeLink = styled.a`
  text-align: right;
  display: block;
  border: none;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  margin-bottom: 2em;
`;

const AboutWrapper = styled.div`
  background-color: #00000099;
  padding: 20px;
`;

const NewsWrapper = styled.ul`
  margin: 0;
`;

const NewsItem = styled.li`
  list-style: none;
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

  gtag("config", process.env.GA_ID);
};

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const { env } = process;

    const youtubeObj = await fetch(
      `https://script.google.com/macros/s/${env.MUSIC_SHEET_KEY}/exec`
    );
    const youtubeList = await youtubeObj.json();

    const newsObj = await fetch(
      `https://script.google.com/macros/s/${env.NEWS_SHEET_KEY}/exec`
    );
    const newsData = await newsObj.json();

    return {
      musicList: youtubeList,
      news: newsData
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
            <a href={item.link} target="_blank">
              {date} {item.description}
            </a>
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
        {musicList.map(id => (
          <YouTube key={id} videoId={id} className="youtubeItem" />
        ))}
      </YoutubeWrapper>
    );
  }

  render() {
    return (
      <>
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-156990344-1"
          ></script>
          <script>{injectGA()}</script>
          <title>matsuwo</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto+Slab|Source+Sans+Pro:300,300italic,400,400italic&display=swap"
          />
          <noscript>
            <link rel="stylesheet" href="/static/assets/css/noscript.css" />
          </noscript>
          <script src="assets/js/jquery.min.js"></script>
          <script src="assets/js/jquery.scrolly.min.js"></script>
          <script src="assets/js/browser.min.js"></script>
          <script src="assets/js/breakpoints.min.js"></script>
          <script src="assets/js/util.js"></script>
          <script src="assets/js/main.js"></script>
        </Head>
        <main>
          <section id="header">
            <HeadTitle>matsuwo</HeadTitle>
          </section>

          <section id="new" className="main style1">
            <div className="container">
              <header className="major special">
                <h2>What's New</h2>
              </header>
              {this.renderNews()}
            </div>
          </section>

          <section id="works" className="main style1">
            <div className="container">
              <header className="major special">
                <h2>Recent Works</h2>
              </header>
              <div className="gtr-150">{this.renderYouTube()}</div>
              <p>
                <YouTubeLink
                  href="https://www.youtube.com/channel/UCRSPD9OHzBjDfY9EFE4hDHw"
                  target="_blank"
                >
                  ...more
                </YouTubeLink>
              </p>
            </div>
          </section>

          <section id="about" className="main style2">
            <div className="container">
              <AboutWrapper>
                <header className="major special">
                  <h2>About</h2>
                </header>
                <div className="row gtr-150">
                  <div className="col-6 col-12-medium">
                    <ProfileImageWrapper>
                      <Image
                        cloudName="kurooooon"
                        publicId="matsuwo/profile_wkgtbv"
                        width="100%"
                        height="100%"
                        alt="matsuwo"
                      />
                    </ProfileImageWrapper>
                  </div>
                  <div className="col-6 col-12-medium">
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
                  </div>
                </div>
              </AboutWrapper>
            </div>
          </section>

          <section id="footer">
            <ul className="icons">
              <li>
                <a href="https://twitter.com/Ryumatsuo91" className="icon alt">
                  <FaTwitter alt="twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ryuhei.matsuo.50"
                  className="icon alt"
                >
                  <FaFacebook alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ryuhei_matsuo/"
                  className="icon alt"
                >
                  <FaInstagram alt="instagram" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:matsuwo611@gmail.com
"
                  className="icon alt"
                >
                  <FiMail alt="mail" />
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>&copy; matsuwo</li>
              <li>
                Design: <a href="https://html5up.net/">HTML5 UP</a>
              </li>
            </ul>
          </section>
        </main>
      </>
    );
  }
}
