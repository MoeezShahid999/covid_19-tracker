import React from "react";
import { Chart } from "react-charts";

function MyChart(props) {
  // console.log(props.history);
  let cases = [];
  let deaths = [];
  let recovered = [];
  let xy = props.history.cases
    ? Object.entries(props.history.cases).forEach((el) => {
        cases.push(el);
      })
    : null;
  xy = props.history.deaths
    ? Object.entries(props.history.deaths).forEach((el) => {
        deaths.push(el);
      })
    : null;
  xy = props.history.recovered
    ? Object.entries(props.history.recovered).forEach((el) => {
        recovered.push(el);
      })
    : null;
  cases.map((el, ind) => {
    //  debugger

    el.shift();
    el.unshift(ind + 1);
  });
  xy = deaths.map((el, ind) => {
    el.shift();
    el.unshift(ind + 1);
  });
  xy = recovered.map((el, ind) => {
    el.shift();
    el.unshift(ind + 1);
  });
  // console.log(cases.length);
  const data = React.useMemo(() => {
    debugger;
    return [
      {
        label: "Cases",
        data: cases,
      },
      {
        label: "Recovered",
        data: recovered,
      },
      {
        label: "Deaths",
        data: deaths,
      },
    ];
  }, []);

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  // console.log(data)

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "900px",
        height: "500px",
      }}
    >
      <Chart data={data} axes={axes} />
      <div className="color-flex">
        <div>
          Total Cases{" "}
          <span
            style={{
              width: "70px",
              height: "10px",
              display: "inline-block",
              marginLeft: "20px",
              backgroundColor: "#53B9EC",
            }}
          ></span>
        </div>
        <div>
          Total Recovered{" "}
          <span
            style={{
              width: "70px",
              height: "10px",
              display: "inline-block",
              marginLeft: "20px",
              backgroundColor: "#FC6868",
            }}
          ></span>
        </div>

        <div>
          Total Deaths{" "}
          <span
            style={{
              width: "70px",
              height: "10px",
              display: "inline-block",
              marginLeft: "20px",
              backgroundColor: "#DECF3F",
            }}
          ></span>
        </div>
      </div>
      <div className = 'axis-flex'>
        <div>X-Axis: <span>Every Data since 1/22/2020</span></div>
        <div>Y-Axis: <span>Corresponding value of each line</span>  </div>
      </div>
    </div>
  );

  return lineChart;
}
export default MyChart;
