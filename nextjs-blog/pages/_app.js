import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

//모든 페이지 래핑하는 최상위 React구성요소. 전역스타일 추가 가능
