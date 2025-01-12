import localFont from "next/font/local";

/*
Copyright (c) 2021 Spoqa, Inc.
https://spoqa.github.io

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL
*/

const spoqaHanSansNeo = localFont({
  src: [
    {
      path: "../../public/fonts/SpoqaHanSansNeo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SpoqaHanSansNeo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SpoqaHanSansNeo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SpoqaHanSansNeo-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/SpoqaHanSansNeo-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-spoqa-han-sans-neo",
});

export default spoqaHanSansNeo;
