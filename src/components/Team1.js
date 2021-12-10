import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MemberCard from "./MemberCard";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import MITI_SHAH from "../assets/Team/MITI_SHAH.webp";
import MEHAK_SATI from "../assets/Team/MEHAK_SATI.webp";
import YASH_SINHA from "../assets/Team/YASH_SINHA.webp";
import ASAVARI_AMBAVANE from "../assets/Team/ASAVARI_AMBAVANE.webp";
import SAMEEP_SHERKAR from "../assets/Team/SAMEEP_SHERKAR.webp";
import SURYAJEET_BHOSALE from "../assets/Team/SURYAJEET_BHOSALE.webp";
import CHINMAY_CHOPDA from "../assets/Team/CHINMAY_CHOPDA.webp";

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

export default function Team1() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const classes = useTabStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ maxWidth: "1000px", margin: "0 auto" }}>
      <Tabs
        classes={{ root: classes.root, scroller: classes.scroller }}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant={"scrollable"}
        scrollButtons={true}
      >
        <Tab label="Secretaries" {...a11yProps(0)} />
        <Tab label="Illuminati Co-ordinators" {...a11yProps(1)} />
        <Tab label="Treasurer" {...a11yProps(2)} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md>
              <MemberCard
                img={MEHAK_SATI}
                post="Secretary"
                name="Mehak Sati"
                color="green"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={YASH_SINHA}
                post="Secretary"
                name="Yash Sinha"
                color="green"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={MITI_SHAH}
                post="Secretary"
                name="Miti Shah"
                color="green"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md>
              <MemberCard
                img={SAMEEP_SHERKAR}
                post="Illuminati Co-ordinator"
                name="Sameep Sherkar"
                color="blue"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={ASAVARI_AMBAVANE}
                post="Illuminati Co-ordinator"
                name="Asavari Ambavane"
                color="blue"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={SURYAJEET_BHOSALE}
                post="Illuminati Co-ordinator"
                name="Suryajeet Bhosale"
                color="blue"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md>
              <MemberCard
                img={CHINMAY_CHOPDA}
                post="Treasurer"
                name="Chinmay Chopda"
                color="purple"
              />
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
