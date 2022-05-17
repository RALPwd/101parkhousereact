import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/** FavIcon */}
          {/** WebFont */}
          {/** stylesheets */}
          {/** scripts */}
          {/* <!-- ASKSUITE CODE START --> */}
          <script
            id="script-infochat"
            src="https://cdn.asksuite.com/infochat.js?dataConfig=https://control.asksuite.com/api/companies/101-park-hause"
          ></script>
          {/* <!-- ASKSUITE CODE END --> */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
