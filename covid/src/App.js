import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
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
        {props.data.Countries
          ? props.data.Countries.map((el) => (
              <div>
                <div className="list-item">
                  <span style={{ color: "red" }} className="list-count">
                    {el.TotalConfirmed}
                  </span>{" "}
                  <span
                    style={{ marginLeft: "10px", fontSize: "18px" }}
                    className="list-heading"
                  >
                    {el.Country}
                  </span>
                </div>
                <div className="list-item">
                  <span className="list-heading">Deaths: </span>
                  <span className="list-count">{el.TotalDeaths}</span>
                </div>
                <div className="list-item">
                  <span className="list-heading">Recovered: </span>
                  <span className="list-count">{el.TotalRecovered}</span>
                </div>
                <Divider />
              </div>
            ))
          : null}
      </div>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            variant="permanent"

          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      <div style={{ marginLeft: "280px", marginRight: "50px" }}>
        <div>
          <MainComponent data={props.data} />
        </div>
        <div
          style={{
            marginTop: "50px",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          {props.history ? <ReactCharts history={props.history} /> : null}
        </div>
      </div>
    </div>
  );
}
