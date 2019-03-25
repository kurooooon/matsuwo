import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const YouTubeLink = styled.a`
  text-align: right;
  display: block;
  border: none;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
`;

const AboutWrapper = styled.div`
  background-color: #00000099;
  padding: 20px;
`;

export default class Index extends React.Component {

  static async getInitialProps({ req }) {
    const res = await fetch('')
    const data = await res.json()
    return {
      items: data.items
    }
  }

  renderYouTube() {
    const { items } = this.props;
    if (!items) {
      return null;
    }
    return (
      <div className="youtube-wrapper">
      {items.map(item => (
        <YouTube
          videoId={item.id.videoId}
          className="youtubeItem"
        />
      ))}
      </div>
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

          <section id="works" class="main style1">
            <div class="container">
              <header class="major special">
                <h2>Recent Works</h2>
              </header>
              <div class="row gtr-150">
              {this.renderYouTube()}
              </div>
              <YouTubeLink href="https://www.youtube.com/channel/UCRSPD9OHzBjDfY9EFE4hDHw" target="_blank">...more</YouTubeLink>
            </div>
          </section>

          <section id="about" class="main style2">
            <div class="container">
              <AboutWrapper>
                <div class="row gtr-150">
                  <div class="col-6 col-12-medium">
                    <ProfileImageWrapper>
                      <img
                        width="100%"
                        height="100%"
                        src="/static/images/profile.jpg"
                        alt="matsuwo"
                      />
                    </ProfileImageWrapper>
                  </div>
                  <div class="col-6 col-12-medium">
                    <header class="major">
                      <h2>About</h2>
                    </header>
                    <p>中学生の時に初めてギターを手にしてから、弾き語りを主に行っております。<br />アートと音楽が好きで、いろいろやっています。</p>
                  </div>
                </div>
              </AboutWrapper>
            </div>
          </section>

          <section id="footer">
            <ul class="icons">
              <li><a href="https://twitter.com/Ryumatsuo91" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="https://www.facebook.com/ryuhei.matsuo.50" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="mailto:matsuwo611@gmail.com
" class="icon alt fa-envelope"><span class="label">Email</span></a></li>
            </ul>
            <ul class="copyright">
              <li>&copy; matsuwo</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </section>
        </main>
      </>
    );
  }
}