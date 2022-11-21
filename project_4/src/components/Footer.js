import { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colo: "red",
      color: "blue",
      x: "good",
    };
  }
  change = () => {
    this.setState({ x: "mohammad" });
  };

  render() {
    return (
      <div>
        <h1
          style={{ color: this.state.colo, backgroundColor: this.state.color }}
        >
          {this.state.x}
        </h1>
        <button onClick={this.change}>change</button>
        <footer>
          <div class="last">
            <Link to="/">home</Link>
            <Link to="/services">services&nbsp;</Link>
            <Link to="/projects">projects&nbsp;</Link>
            <Link to="/contact">contact&nbsp;</Link>
          </div>
          <br />
          <p>mohammad&#169;2022</p>
        </footer>
      </div>
    );
  }
}
