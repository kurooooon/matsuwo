import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'

const Header = styled.section`
  height: 90vh;
  background-color: #4686a0;
  color: rgba(255, 255, 255, 0.75);
  background-attachment: fixed,	fixed, fixed;
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

export default class Index extends React.Component {

  static async getInitialProps({ req }) {

    const youtubeObj = await fetch('');

    const newsObj =  await fetch('');
    
    const youtubeData = await youtubeObj.json();
    const newsData = await newsObj.json();
      
    return {
      items: youtubeData.items,
      news: newsData
    };
  }

  renderNews() {
    const { news } = this.props;
    const items = news.map(item => {
      const date = format(new Date(item.date), 'yyyy MM/dd(EEEEE)', {locale: ja});
      return (
        <NewsItem key={item.id}>
          {item.link
            ? <a href={item.link} target="_blank">{date} {item.description}</a>
            : <p>{date} {item.description}</p>
          }
        </NewsItem>
      );
    })
    return <NewsWrapper>{items}</NewsWrapper>
  }

  renderYouTube() {
    const { items } = this.props;
    console.log(items);
    if (!items) {
      return null;
    }
    return (
      <YoutubeWrapper>
      {items.map(item => (
        <YouTube
          key={item.id.videoId}
          videoId={item.id.videoId}
          className="youtubeItem"
        />
      ))}
      </YoutubeWrapper>
    );
  }

  render() {
    return (
      <>
        <Head>
          <title>matsuwo</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <link rel="stylesheet" href="/static/assets/css/main.css" />
          <noscript><link rel="stylesheet" href="/static/assets/css/noscript.css" /></noscript>
          <script src="assets/js/jquery.min.js"></script>
          <script src="assets/js/jquery.scrolly.min.js"></script>
          <script src="assets/js/browser.min.js"></script>
          <script src="assets/js/breakpoints.min.js"></script>
          <script src="assets/js/util.js"></script>
          <script src="assets/js/main.js"></script>
        </Head>
        <main>
          <section id="header" />

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
              <div className="gtr-150">
              {this.renderYouTube()}
              </div>
              <p>
                <YouTubeLink href="https://www.youtube.com/channel/UCRSPD9OHzBjDfY9EFE4hDHw" target="_blank">...more</YouTubeLink>
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
                      <img
                        width="100%"
                        height="100%"
                        src="/static/images/profile.jpg"
                        alt="matsuwo"
                      />
                    </ProfileImageWrapper>
                  </div>
                  <div className="col-6 col-12-medium">
                    <p>北海道札幌での<a href="https://www.saatchiart.com/account/profile/218701" target="_blank">アート</a>の制作や個展、音楽制作やライブ活動を精力的に行い、2019年春より東京での活動をスタート。
                    2013年matsuwo名義で<a href="https://tower.jp/artist/2149889/matsuwo" target="_blank">宅録CD</a>をリリース。</p>
                    <p>歌詞と曲は心揺さぶられるできごと作品や言葉などありふれた日常の中からインスパイアされ主にJ-popの曲をlogic proやProtoolsで制作しており、音はいたってシンプルで分厚く重ねない。
                    影響されたアーティストはゆず、ミスターチルドレン、サザンオールスターズ、宇多田ヒカルなどなど。
                    ライブでは主にアコースティックギターの弾き語り形式で演奏。
                    使用アコースティックギターはリサイクルショップで購入した1560円のモーリス。
                    今まで使ってきたどれよりも弾きやすい。</p>
                    <p>アートでは油絵を制作してイタリア、フランス、ニューヨークの展覧会やアートインレジデンスを経験後、音楽ジャケットやチラシのアートワークを担当したりアートフェアや個展などで絵画を発表している。</p>
                  </div>
                </div>
              </AboutWrapper>
            </div>
          </section>

          <section id="footer">
            <ul className="icons">
              <li><a href="https://twitter.com/Ryumatsuo91" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="https://www.facebook.com/ryuhei.matsuo.50" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="https://www.instagram.com/ryuhei_matsuo/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="mailto:matsuwo611@gmail.com
" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            {/* <p>
              <a className="twitter-timeline" data-height="500" data-theme="dark" href="https://twitter.com/Ryumatsuo91?ref_src=twsrc%5Etfw">Tweets by Ryumatsuo91</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </p> */}
            <ul className="copyright">
              <li>&copy; matsuwo</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </section>
        </main>
      </>
    );
  }
}