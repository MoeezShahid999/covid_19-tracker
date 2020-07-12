import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MainComponent from "./Components/MainComponent";
import ReactCharts from "./Components/ReactCharts";
import "./App.css";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function PermanentDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: true,
  });
  const [searchVal, setSeachVal] = React.useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const changeHandler = (e) => {
    setSeachVal(e.target.value);
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <TextField
          id="standard-basic"
          label="Search Country"
          className = 'multipart'
          onChange={changeHandler}
          value={searchVal}
          style={{ width: "100%",outline:'white',marginBottom:'20px' }}
        />

        {props.countryData.length
          ? props.countryData.map((el) => {
              if (
                el.country.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
              ) {
                return (
                  <div
                    className="list-item-container"
                    onClick={() => props.countrySelected(el.country)}
                  >
                    <div className="list-item">
                      <span style={{ color: "rgb(212, 23, 23)" }} className="list-count">
                        {el.cases}
                      </span>{" "}
                      <span
                        style={{ marginLeft: "10px", fontSize: "18px" }}
                        className="list-heading"
                      >
                        {el.country}
                      </span>
                    </div>
                    <div className="list-item">
                      <span className="list-heading">Deaths: </span>
                      <span className="list-count">{el.deaths}</span>
                    </div>
                    <div className="list-item">
                      <span className="list-heading">Recovered: </span>
                      <span className="list-count">{el.recovered}</span>
                    </div>
                    <Divider style = {{background:'#484747',margin:'10px 0'}}/>
                  </div>
                );
              }
            })
          : null}
      </div>
    </div>
  );

  return (
    <div className = {`${props.bg?'content-header':''}`}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer anchor={anchor} open={state[anchor]} variant="permanent">
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      <div style={{ marginLeft: "280px", marginRight: "50px" }}>
        <div>
          <MainComponent country={props.country} data={props.totalData} />
        </div>
        <div
          style={{
            marginTop: "50px",
            padding: "20px",
            // backgroundColor: "white",
          }}
        >
          <Divider style = {{marginBottom:'50px'}}/>
          {props.history ? <ReactCharts history={props.history} /> : null}
        </div>
      </div>
    </div>
  );
}
