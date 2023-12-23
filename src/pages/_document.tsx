import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Get Smarter In Just 5 Minutes | BeeLearn",
    description:
      "BeeLearn is a bite-sized learning app. Choose from hundreds of topics, brush up your knowledge, up-skill your technical ability.",
    image:
      "https://res.cloudinary.com/beelearn/image/upload/v1698033110/permanent/main_flyer.jpg",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@usebeelearn" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
