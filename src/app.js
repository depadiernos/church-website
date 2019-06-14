// import React stack packages
import React from "react";
import { render } from "react-dom";
import Loadable from "react-loadable";
import { Router } from "@reach/router";
import { Helmet } from "react-helmet";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { storage } from "react-easy-params";

//import stateless components
import Header from "~/components/header";
import Footer from "~/components/footer";

//import configuration modules
import { store } from "~/store/store";
import theme from "./theme";

//import stateful components

const loading = () => <div />;

const Home = Loadable({
  loader: () => import("~/components/Home"),
  loading
});

const About = Loadable({
  loader: () => import("~/components/About"),
  loading
});
const Ministries = Loadable({
  loader: () => import("~/components/Ministries"),
  loading
});
const Readings = Loadable({
  loader: () => import("~/components/Readings"),
  loading
});

// define localStorage
storage.readings = storage.readings || [];

const App = () => {
  !storage.readings.length
    ? store.getReadings()
    : !store && !store.readings.length && store.isToday
      ? (store.readings = storage.readings)
      : store.getReadings();
  !store.today.length ? store.getToday() : null;
  !store.posts.length ? store.getPosts() : null;
  !store.season.length ? store.getSeason() : null;
  console.log(store.season);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <meta
            name="Description"
            content="A Catholic Church in Cookeville, TN."
          />
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="/bootstrap.min.css" />
        </Helmet>
        <Router>
          <Home path="/" />
          <About path="/parish" />
          <Ministries path="/ministries" />
          <Readings path="/readings" />
        </Router>
        <Footer />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700');
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,600');
  body {
    font-family: "Noto sans", sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #2F2F2F;
    line-height: 1.5rem;
    h1, h2, h3, h4, h5{
        font-family: "Raleway", sans-serif;
        font-weight: 700;
    }
  }
`;

render(<App />, document.getElementById("app"));
