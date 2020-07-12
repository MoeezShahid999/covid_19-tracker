import React from "react";
import "./MainComponent.css";

class MainComponent extends React.Component {
  state = {
    data: {},
  };
  historicalCountryWise() {
    fetch("https://corona.lmao.ninja/v2/historical?lastdays=30", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/historical/all?lastdays=all", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    // console.log(this.state.data);
    const { data } = this.props;
    // console.log(this.props.data)
    // console.log(this.state.data);

    return (
      <div>
        <h1 style={{ margin: "0 0 20px 0px", fontSize: "48px" }}>
          {this.props.country}
        </h1>
        <div className="main">
          <div className="infected">
            <div className="count">
              {data.cases || data.cases == 0 ? data.cases : null}
            </div>
            <div className="heading">Confirmed</div>
          </div>
          <div className="active">
            <div className="count">
              {data.active || data.active == 0 ? data.active : null}
            </div>
            <div className="heading">Active</div>
          </div>
          <div className="recovered">
            <div className="count">
              {data.recovered || data.recovered == 0 ? data.recovered : null}
            </div>
            <div className="heading">Recovered</div>
          </div>
          <div className="deaths">
            <div className="count">
              {data.deaths || data.deaths == 0 ? data.deaths : null}
            </div>
            <div className="heading">Deaths</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
