import React from "react";
import CardList from "./components/CardList";

const App = () => {

  return (
    <div className="App">
      <h1>Explore</h1>
      <p>Últimos posts</p>
      <CardList posts={posts} />
    </div>
  );
};

export default App;
