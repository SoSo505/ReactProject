import React, { Component, useContext } from "react";
import "../../styles/content_component_styles/Games.css";
import { Link } from "react-router-dom";
import Distributionofgames from "./DistributionOfGames";


interface Props {}

interface State {
  gamesList: any;
  gameSearch: string;
  toSearch: boolean;
}

 class Games extends Component<Props, State> {
    baseurl = 'http://127.0.0.1:8000/app'
  constructor(props: Props) {
    super(props);
    this.state = {
      gamesList: [],
      gameSearch: "",
      toSearch: false,
    };
    this.getGames = this.getGames.bind(this);
    this.getSearchingGame = this.getSearchingGame.bind(this);
    this.changeSearchGame=this.changeSearchGame.bind(this);
  }

  componentWillMount() {
    this.getGames(1);
  }

  getGames(id:number) {
    console.log("fetching.....");
    fetch(this.baseurl + "/GameCategories/"+id+"/")
      .then((response) => response.json())
      .then((responce) =>
        this.setState({
          gamesList: responce,
        })
      );
  }

  getSearchingGame() {
    console.log("searching game");
    fetch("http://127.0.0.1:8000/app/Games/" + this.state.gameSearch + "/")
      .then((response) => response.json())
      .then((response) => this.setState({ gamesList: response }));
  }

  changeSearchGame(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ gameSearch: event.target.value });
  }

  render() {

    //const { refer } = this.state
    return (
      <div className="Content">
        <form className="searchForm">
          <input type="text" className="searchInput" onChange={this.changeSearchGame} />
          <img
            src="https://thumbs.dreamstime.com/b/%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0-%D1%83%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B8%D0%B2%D0%B0%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D0%BA-%D0%BB%D1%83%D0%BF%D1%8B-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0-107950947.jpg"
            className="searchButton"
            onClick={this.getSearchingGame}
          />
        </form>
        <div className="content_body">
          <div className="content_games">
            {this.state.gamesList.map((item: any, index: number) => (
              <div className="gameItem" key={index}>
                <Link to={"Games/" + item.fields.name}>
                  <img
                    className="gameImage"
                    src={item.fields.link}
                    alt={item.fields.name}
                  />
                  <h6 className="gameName">{item.fields.name}</h6>
                </Link>
              </div>
            ))}
          </div>
          <div className="content_game_types">
            <button className="game_type" onClick={()=>this.getGames(1)}>Strategy</button>
            <button className="game_type" onClick={()=>this.getGames(2)}>Horror</button>
            <button className="game_type" onClick={()=>this.getGames(3)}>Shooter</button>
            <button className="game_type" onClick={()=>this.getGames(4)}>Fighting</button>
            <button className="game_type" onClick={()=>this.getGames(5)}>Arcade</button>
            <button className="game_type" onClick={()=>this.getGames(6)}>Sport</button>
            <button className="game_type" onClick={()=>this.getGames(7)}>Survival</button>
            <button className="game_type" onClick={()=>this.getGames(8)}>Simulator</button>
          </div>
        </div>
        <Distributionofgames/>
      </div>
    );
  }
}

export default Games
