import React from 'react';
import styled from "@emotion/styled";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import TickTok from '../static/images/tiktok.svg'

const FooterSection = styled.section`
  padding: 6rem 0 4rem 0;

  @media (min-width: 1140px) {
    padding: 6em 0 6em 0;
  }

  @media (max-width: 980px) {
    padding: 5rem 3rem 3rem 3rem;
  }

  @media (max-width: 736px) {
    padding: 3rem 1.5rem 3rem 1.5rem;
  }

  @media (min-width: 480px) {
    padding: 5rem 3rem 5rem 3rem;
  }

  background-color: #4686a0;
  color: rgba(255, 255, 255, 0.75);
  background-attachment: fixed, fixed, fixed;
  background-position: top left, center center, center center;
  background-size: auto, cover, cover;
  text-align: center;
  background-image: url("https://res.cloudinary.com/kurooooon/image/upload/v1579370033/matsuwo/overlay2_xpyeat.png"), url("https://res.cloudinary.com/kurooooon/image/upload/v1579370033/matsuwo/overlay4_fyhlai.svg"), linear-gradient(45deg, #614d20, #333 95%);

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

  header.major:after {
    background: #ffffff;
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
    color: #4686a0 !important;
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

  .icons {
    margin: 0;
  }

  .copyright {
    font-size: 0.8rem;
    list-style: none;
    margin: 2rem 0 0 0;
    padding: 0;
  }

  .copyright li {
    border-left: solid 1px;
    display: inline-block;
    line-height: 1rem;
    margin-left: 1rem;
    padding: 0 0 0 1rem;
  }

  .copyright li:first-child {
    border-left: 0;
    margin-left: 0;
    padding: 0;
  }
`;

const FooterLink = styled.a`
  font-size: 1rem;
  border-bottom: none;

  @media (min-width: 480px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1140px) {
    font-size: 1.2rem;
  }
`;

const CopyRight = styled.ul`
  li {
    font-size: 0.8rem;
    border: 0;
    display: block;
    padding: 0;
    line-height: 1rem;

    @media (min-width: 480px) {
      display: inline-block;
    }

    :last-child {
      margin: 0.8rem 0 0 0;

      @media (min-width: 480px) {
        border-left: solid 1px;
        margin-left: 1em;
        padding: 0 0 0 1em;
      }
    }
  }
`;

const FooterList = styled.ul`
  cursor: default;
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.2rem;

  @media (min-width: 480px) {
    margin-bottom: 2rem;
  }

  li {
    display: inline-block;
    padding: 0 1.25rem 0 0;
  }

  li:last-child {
    padding-right: 0;
  }

  li .icon:before {
    font-size: 1.5rem;
  }
`;

const Footer = function Presenter ({ id }) {
  return (
    <FooterSection>
      <FooterList>
        <li>
          <FooterLink
            href="https://www.youtube.com/channel/UCRSPD9OHzBjDfY9EFE4hDHw"
            target="_blank"
            aria-label="ToLo Records Channel / Youtube"
          >
            <FaYoutube alt="ToLo Records Channel / Youtube" />
          </FooterLink>
        </li>
        <li>
          <FooterLink
            href="https://twitter.com/MATUWOMATUWO"
            target="_blank"
            aria-label="@MATUWOMATUWO / Twitter"
          >
            <FaTwitter alt="@MATUWOMATUWO / Twitter" />
          </FooterLink>
        </li>
        <li>
          <FooterLink
            href="https://www.facebook.com/ryuhei.matsuo.50"
            target="_blank"
            aria-label="Ryuhei Matuso / Facebook"
          >
            <FaFacebook alt="Ryuhei Matuso / Facebook" />
          </FooterLink>
        </li>
        <li>
          <FooterLink
            href="https://www.instagram.com/ryuhei_matsuo/"
            target="_blank"
            aria-label="ryuhei_matsuo / instagram"
          >
            <FaInstagram alt="ryuhei_matsuo / instagram" />
          </FooterLink>
        </li>
        <li>
          <FooterLink
            href="https://www.tiktok.com/@matumatumatu"
            target="_blank"
            aria-label="@matumatumatu / tiktok"
          >
            <TickTok width="16" alt="@matumatumatu / tiktok" />
          </FooterLink>
        </li>
        <li>
          <FooterLink
            href="mailto:matsuwo611@gmail.com"
            target="_blank"
            aria-label="mail to matsuwo"
          >
            <FiMail alt="mail to matsuwo" />
          </FooterLink>
        </li>
      </FooterList>
      <CopyRight>
        <li>&copy; matsuwo / 松尾竜平</li>
        <li>
          Design: <a href="https://html5up.net/">HTML5 UP</a>
        </li>
      </CopyRight>
    </FooterSection>
  )
}

export default Footer;