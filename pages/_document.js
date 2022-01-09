import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="el">
        <Head>
          {/* <Html lang= /> */}

          <link
            href="https://fonts.googleapis.com/css2?family=Manrope&family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
