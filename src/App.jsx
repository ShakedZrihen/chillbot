import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SendSongPage from "./SendSongPage";
import SongHugPage from "./SongHugPage";
import RegisterPage from "./RegisterPage";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/sendsong">
          <SendSongPage />
        </Route>
        <Route path="/songhug">
          <SongHugPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
