import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="MERN stack developer looking for a job"
          />
          <meta
            name="keywords"
            content="Full Stack Web Developer, Freelancer ,MERN developer"
          />
        </Head>
        <body className="dark:bg-gray-800 dark:text-white bg-slate-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
