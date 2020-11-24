import App from 'next/app';
import GlobalStyles from 'Styles/GlobalStyles'
import Header from 'Components/Header';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </>
    )
  }
}