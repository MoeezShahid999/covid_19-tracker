import React from "react";
import App from "./App";

class AppContainer extends React.Component {
  state = {
    data: {},
  };
  componentDidMount() {
    fetch("https://api.covid19api.com/summary", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ data: data });

      })
      .catch((err) => {
        console.log(err);
      });
    // fetch("https://covid-193.p.rapidapi.com/statistics", {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-host": "covid-193.p.rapidapi.com",
    //     "x-rapidapi-key": "ad33439eeamsh3ff3820e44b0968p1805aajsn9c10732612e8",
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({ data: data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // fetch(
    //   "https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-04-07",
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    //       "x-rapidapi-key":
    //         "ad33439eeamsh3ff3820e44b0968p1805aajsn9c10732612e8",
    //     },
    //   }
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    fetch("https://corona.lmao.ninja/v2/historical/all?lastdays=all", {})
      .then((response) => {
        //   console.log(response)
        return response.json();
      })
      .then((data) => {
        this.setState({ history: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    //   console.log(this.state.data)
    return (
      <div className="App">
        <App data={this.state.data} history={this.state.history} />
      </div>
    );
  }
}
export default AppContainer;
