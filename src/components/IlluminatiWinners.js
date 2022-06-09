import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

import place1 from "../assets/place1.JPG";
import place2 from "../assets/place2.jpg";
import place3 from "../assets/place3.JPG";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function IlluminatiWinners() {
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const classes = useTabStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ maxWidth: "1000px", margin: "0 auto" }} data-aos="fade-up">
      <Tabs
        classes={{ root: classes.root, scroller: classes.scroller }}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant={"scrollable"}
        scrollButtons={true}
      >
        <Tab label="Second Place" {...a11yProps(0)} />
        <Tab label="First Place" {...a11yProps(1)} />
        <Tab label="Third Place" {...a11yProps(2)} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="winners">
            <img src={place2} alt="winners"></img>
            <h2>~ ELECTRONICS ~</h2>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="winners">
            <img src={place1} alt="winners"></img>
            <h2>~ PRODUCTION ~</h2>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className="winners">
            <img src={place3} alt="winners"></img>
            <h2>~ CIVIL ~</h2>
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
