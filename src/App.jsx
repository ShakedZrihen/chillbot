import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SendSongPage from "./SendSongPage";
import SongHugPage from "./SongHugPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sendSong">
          <SendSongPage />
        </Route>
        <Route path="/songHug">
          <SongHugPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
