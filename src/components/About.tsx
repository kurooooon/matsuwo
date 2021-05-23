import React from 'react';
import styled from '@emotion/styled';
import { SectionHeader } from './SectionHeader';
import { Row } from './Row';
import { Col } from './Col';
import Lazy from './Lazy';
import { SectionCss } from './Section';
import { Image } from 'cloudinary-react';

const AboutWrapper = styled.section`
  ${SectionCss}
  position: relative;
  background-color: #333;
  color: rgba(255, 255, 255, 0.75);
  background-attachment: fixed, fixed;
  background-image: url('https://res.cloudinary.com/kurooooon/image/upload/f_auto/v1579369001/matsuwo/back_wqixtg.jpg');
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  b {
    color: #ffffff;
  }

  header p {
    color: #ffffff;
  }

  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  button,
  .button {
    box-shadow: inset 0 0 0 1px #ffffff;
    color: #ffffff !important;
  }

  input[type='submit']:hover,
  input[type='reset']:hover,
  input[type='button']:hover,
  button:hover,
  .button:hover {
    background-color: rgba(255, 255, 255, 0.125);
  }

  input[type='submit']:active,
  input[type='reset']:active,
  input[type='button']:active,
  button:active,
  .button:active {
    background-color: rgba(255, 255, 255, 0.25);
  }

  input[type='submit'].primary,
  input[type='reset'].primary,
  input[type='button'].primary,
  button.primary,
  .button.primary {
    background-color: #ffffff;
    box-shadow: inset 0 0 0 1px #ffffff !important;
    color: #333 !important;
  }

  input[type='submit'].primary:hover,
  input[type='reset'].primary:hover,
  input[type='button'].primary:hover,
  button.primary:hover,
  .button.primary:hover {
    background-color: rgba(255, 255, 255, 0.125) !important;
    color: #ffffff !important;
  }

  input[type='submit'].primary:active,
  input[type='reset'].primary:active,
  input[type='button'].primary:active,
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

const ProfileImageWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const About = () => (
  <AboutWrapper>
    <AboutContainer>
      <AboutInnerWrapper>
        <SectionHeader inverse>
          <h2>About</h2>
        </SectionHeader>
        <Row>
          <Col>
            <ProfileImageWrapper>
              <Lazy triggerOnce rootMargin="100px 0px">
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
                rel="noreferrer"
              >
                アート
              </a>
              の制作や個展、音楽制作やライブ活動を精力的に行い、2019年春より東京での活動をスタート。
              2013年matsuwo名義で
              <a
                href="https://tower.jp/artist/2149889/matsuwo"
                target="_blank"
                rel="noreferrer"
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
);

export default About;
