import React from "react";
import TitleBar from "./TitleBar";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar
          title={this.props.title}
          version="3.0.0"
          subtitle="Created by Ty Hitzeman"
        />
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};
