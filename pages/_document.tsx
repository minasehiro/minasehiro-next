import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon_192.png"></link>
        <meta name="theme-color" content="#7BB6CD" />
      </Head>
      <body>
        {/* FOUC（Flash of unstyled content）回避のおまじない */}
        <script> </script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
