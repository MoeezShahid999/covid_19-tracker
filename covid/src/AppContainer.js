import React from "react";
import App from "./App";
import "./loader.css";

class AppContainer extends React.Component {
  state = {
    totalData: {},
    countryData: {},
    // history: {},
    country: null,
    spinner: false,
    loader: false,
  };

  countrySelected = (country) => {
    this.setState({
      country: country,
      history: null,
      spinner: true,
      // loader: true,
    });
    fetch(
      `https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query`,
      {}
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ totalData: data });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`https://corona.lmao.ninja/v2/historical/${country}?lastdays=all`, {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ history: data.timeline, loader: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    // fetch("https://api.covid19api.com/summary", {})
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({ data: data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    if (!this.state.country) {
      fetch("https://corona.lmao.ninja/v2/all?yesterday", {})
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({ totalData: data });
        })
        .catch((err) => {
          console.log(err);
        });
      fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort", {})
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({ countryData: data });
        })
        .catch((err) => {
          console.log(err);
        });

      fetch("https://corona.lmao.ninja/v2/historical/all?lastdays=all", {})
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({ history: data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {/* {this.state.loader ? <div className="loader">Loading...</div> : null} */}
        <App
          // bg={this.state.loader}
          countrySelected={this.countrySelected}
          country={this.state.country || "Global"}
          data={this.state.totalData}
          countryData={this.state.countryData}
          totalData={this.state.totalData}
          history={this.state.history}
        />
      </div>
    );
  }
}
export default AppContainer;
