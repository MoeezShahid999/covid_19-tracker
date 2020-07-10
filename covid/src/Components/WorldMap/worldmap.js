import React from "react";
// import "./map.css"
import { WorldMap } from "react-svg-worldmap";

import countryList from "react-select-country-list";

function worldMap(props) {
  let data = [];
  if (props.data.response) {
    props.data.response.map((el) => {
      let elIso = countryList()
        .getData()
        .find((element) => {
          return element.label.toLowerCase() == el.country.toLowerCase();
        });

      if (elIso) {
        data.push({
          country: elIso.value.toLowerCase(),
          value: <div className="cardContainer">
              {/* <div>{el.country}</div>
              <div>
                <span style={{ color: "blue" }}> {el.cases.total}</span>{" "}
                <b>Confirmed Cases</b>
              </div>
              <div>
                <span style={{ color: "red" }}> {el.cases.total}</span>{" "}
                <b>Confirmed Deaths</b>
              </div> */}
              12
            </div>
          
        });
      }
      else{
          console.log(1)
          debugger
      }
    });
  }
  //   const data = [
  //     { country: "cn", value: 1389618778 }, // china
  //     { country: "in", value: 1311559204 }, // india
  //     { country: "us", value: 331883986 }, // united states
  //     { country: "id", value: 264935824 }, // indonesia
  //     { country: "pk", value: 210797836 }, // pakistan
  //     { country: "br", value: 210301591 }, // brazil
  //     { country: "ng", value: 208679114 }, // nigeria
  //     { country: "bd", value: 161062905 }, // bangladesh
  //     { country: "ru", value: "asd" }, // russia
  //     { country: "mx", value: 127318112 }, // mexico
  //   ];
  //   console.log(props.data);
  //   console.log(countryList().getData());
  return (
    <div className="App">
      <WorldMap
        color="red"
        title="Covid 19 Map"
        value-suffix="people"
        size="xl"
        data={data}
        // frame = {true}
      />
    </div>
  );
}

export default worldMap;
