import { createGlobalStyle, css } from "styled-components";
import palette from "./palette";
import { responsive } from "./responsive";

const globalStyle = css`
  * {
    outline: none;
    box-sizing: inherit;
    color: #1a1b1c;
    font-weight: 400;
  }

  html,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    color: #1a1b1c;
  }

  span {
    color: inherit;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    box-sizing: border-box;
    display: block;
    font-size: 0.875rem;
    margin: 0;
    padding: 0;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  html {
    font-size: 16px;
    /** for IE */
    -ms-overflox-style: none;
  }

  body {
    font-family: Noto Sans, Noto Sans KR, sans-serif;
    box-sizing: border-box;
    margin: 0;
    margin: auto;
    position: relative;
    padding: 0;
    min-height: 100vh;
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    min-height: 100vh;
    font-size: 0.875rem;

    /* -webkit-scrollbar : {
      display: hidden;
    }
    -ms-overflow-style: none; */
  }

  /* body::-webkit-scrollbar {
    display: none;
    height: 0;
    width: 0;
  } */

  pre {
    font: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #17a1ff;
  }

  b {
    font-weight: 700;
  }
  input,
  button,
  textarea {
    font-family: inherit;
  }
  /** ie input x버튼 삭제 */
  input::-ms-clear {
    display: none;
  }

  input[type="checkbox"] + input {
    display: none;
  }

  select {
    font-size: 100%;
  }
  .blue {
    color: #1535b3;
  }
  .bg-blue {
    background-color: #1535b3 !important;
  }

  .flex {
    display: flex;
  }
  .ft32 {
    font-size: 2rem;
    line-height: 1.4;
  }
  .ft26 {
    font-size: 1.625rem;
    line-height: 1.4;
  }
  .ft24 {
    font-size: 1.5rem;
    line-height: 1.4;
  }
  .ft21 {
    font-size: 1.3125rem;
    line-height: 1.4;
  }
  .ft15 {
    font-size: 0.9375rem;
    line-height: 1.4;
  }
  .ft12 {
    font-size: 0.75rem;
    line-height: 1.4;
  }
  .input-error-message {
    margin-top: 4px;
    display: flex;
    align-items: center;
    color: #ff0322;
    position: relative;
  }

  .input-error-message p {
    margin-left: 17px;
    font-size: 14px;
    line-height: 21px;
    color: #ff0322;
    width: calc(100% - 14px);
  }
  .input-error-message svg {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 4px;
    left: 0;
  }

  .input-success-message {
    margin-top: 4px;
    display: flex;
    align-items: center;
    color: #1bc481;
    position: relative;
  }

  .input-success-message p {
    margin-left: 17px;
    font-size: 14px;
    line-height: 21px;
    color: #1bc481;
    width: calc(100% - 14px);
  }
  .input-success-message svg {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 4px;
    left: 0;
  }

  .required-mark {
    color: red;
    margin-left: 2px;
  }

  .scroll-lock {
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
  }

  .hide {
    display: none;
  }
  .hidden-title {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    background-color: transparent;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  @font-face {
    font-style: normal;
    font-family: GmarketSans;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/GmarketSans-Ragular.woff") format("woff");
  }
  @font-face {
    font-style: normal;
    font-family: GmarketSans;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/GmarketSans-Bold.woff") format("woff");
  }
`;

const reactSlickStyle = css`
  /* Slider */
  .slick-slider {
    position: relative;

    height: 100%;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    height: 100%;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    margin: 0;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
    font-size: 0;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;

    li {
      position: relative;
      display: inline-block;
      margin: 0 2px;
      padding: 0;
      text-align: center;
      vertical-align: top;
      button {
        display: block;
        height: 7px;
        width: 7px;
        padding: 0;
        font-size: 0;
        background: #fff;
        border: 0;
        opacity: 0.25;
        outline: none;
        cursor: pointer;
        background-color: #003843;
        transition: all 0.5s;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .slick-active {
      button {
        opacity: 1;
        background-color: ${palette.black};
      }
    }
  }
  .bt8 {
    bottom: 8px;
  }

  .visible-on-mobile {
    display: none;
    @media (max-width: ${responsive.medium}) {
      display: block;
    }
  }

  .visible-on-pc {
    display: block;
    @media (max-width: ${responsive.medium}) {
      display: none;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
    ${reactSlickStyle}
`;

export default GlobalStyle;
