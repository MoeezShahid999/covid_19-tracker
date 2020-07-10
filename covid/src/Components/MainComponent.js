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
      <div className="main">
        <div className="infected">
          <div className="count">
            {data.Global ? data.Global.TotalConfirmed : null}
          </div>
          <div className="heading">Confirmed</div>
        </div>
        <div className="active">
          <div className="count">
            {data.Global
              ? data.Global.TotalConfirmed -
                (data.Global.TotalRecovered + data.Global.TotalDeaths)
              : null}
          </div>
          <div className="heading">Active</div>
        </div>
        <div className="recovered">
          <div className="count">
            {data.Global ? data.Global.TotalRecovered : null}
          </div>
          <div className="heading">Recovered</div>
        </div>
        <div className="deaths">
          <div className="count">
            {data.Global ? data.Global.TotalDeaths : null}
          </div>
          <div className="heading">Deaths</div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
