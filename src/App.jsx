import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SendSongPage from "./SendSongPage";
import SongHugPage from "./SongHugPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sendsong">
          <SendSongPage />
        </Route>
        <Route path="/songhug">
          <SongHugPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
