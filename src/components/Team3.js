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

import SHREYAS_HEGDE from "../assets/Team/SHREYAS_HEGDE.webp";
import MANALI_SASNUR from "../assets/Team/MANALI_SASNUR.webp";
import SAKHSI_SHIRUDE from "../assets/Team/SAKSHI_SHIRUDE.webp";
import BHUVAN_SARDA from "../assets/Team/BHUVAN_SARDA.webp";
import VEDANTI_KSHIRSAGAR from "../assets/Team/VEDANTI_KSHIRSAGAR.webp";
import PRIYANKA_AVHAD from "../assets/Team/PRIYANKA_AVHAD.jpeg";
import ASAVARI_AMBAVANE from "../assets/Team/ASAVARI_AMBAVANE.webp";
import SAMEEP_SHERKAR from "../assets/Team/SAMEEP_SHERKAR.webp";
import SURYAJEET_BHOSALE from "../assets/Team/SURYAJEET_BHOSALE.webp";
import SHREYA_PUNJABI from "../assets/Team/SHREYA_PUNJABI.jpg";

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

export default function Team3() {
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
    <Box sx={{ maxWidth: "1300px", margin: "0 auto" }} data-aos="fade-up">
      <Tabs
        classes={{ root: classes.root, scroller: classes.scroller }}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant={"scrollable"}
        scrollButtons={true}
      >
        <Tab label="Design and art" {...a11yProps(0)} />
        <Tab label="Illuminati Co-ordinators" {...a11yProps(1)} />
        <Tab label="Performing Arts" {...a11yProps(2)} />
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
                color="purple"
                name="Shreyas Hegde"
                img={SHREYAS_HEGDE}
                post="Design Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Manali Sasnur"
                img={MANALI_SASNUR}
                post="Fine Arts Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Shreya Punjabi"
                img={SHREYA_PUNJABI}
                post="Creative Head"
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
                color="blue"
                name="Sakshi Shirude"
                img={SAKHSI_SHIRUDE}
                post="Performing Arts Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Bhuvan Sarda"
                img={BHUVAN_SARDA}
                post="Performing Arts Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Vedanti Kshirsagar"
                img={VEDANTI_KSHIRSAGAR}
                post="Chief PA Officer"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Priyanka Avhad"
                img={PRIYANKA_AVHAD}
                post="Chief PA Officer"
              />
            </Grid>
          </Grid>
        </TabPanel>
        
      </SwipeableViews>
    </Box>
  );
}
