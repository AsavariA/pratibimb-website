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

import NISHTHA_SAINGER from "../assets/Team/NISHTHA_SAINGER.webp";
import TANISHKA_LALE from "../assets/Team/TANISHKA_LALE.webp";
import MANASHVI_SINGH from "../assets/Team/MANASHVI_SINGH.webp";
import SAHIL_DALVI from "../assets/Team/SAHIL_DALVI.webp";
import CHAITRAVI_CHALKE from "../assets/Team/CHAITRAVI_CHALKE.webp";
import DARSH_BAVISHI from "../assets/Team/DARSH_BAVISHI.webp";
import KSHITIJ_GAIKWAD from "../assets/Team/KSHITIJ_GAIKWAD.webp";
import TEJAS_BHANDARI from "../assets/Team/TEJAS_BHANDARI.webp";
import GAYATRI_VERNEKAR from "../assets/Team/GAYATRI_VERNEKAR.webp";
import DIVIJA_JHA from "../assets/Team/DIVIJA_JHA.webp";
import JOY_PUROHIT from "../assets/Team/JOY_PUROHIT.webp";
import AAYUSHI_JOSHI from "../assets/Team/AAYUSHI_JOSHI.webp";
import AKANKSHA_JADHAV from "../assets/Team/AKANKSHA_JADHAV.webp";
import AAYUSH_SHAH from "../assets/Team/AAYUSH_SHAH.webp";
import SHIVAM_PALIWAL from "../assets/Team/SHIVAM_PALIWAL.webp";
import MAYURI_VAKTE from "../assets/Team/MAYURI_VAKTE.webp";

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

export default function Team2() {
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
    <Box sx={{ maxWidth: "1300px", margin: "0 auto" }}>
      <Tabs
        classes={{ root: classes.root, scroller: classes.scroller }}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant={"scrollable"}
        scrollButtons={true}
      >
        <Tab label="Marketing" {...a11yProps(0)} />
        <Tab label="Public Relations" {...a11yProps(1)} />
        <Tab label="Sponsorship" {...a11yProps(2)} />
        <Tab label="Execution" {...a11yProps(2)} />
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
                color="blue"
                name="Nishtha Sainger"
                img={NISHTHA_SAINGER}
                post="Marketing Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Tanishka Lale"
                img={TANISHKA_LALE}
                post="Marketing Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Manashvi Singh"
                img={MANASHVI_SINGH}
                post="Chief Marketing Officer"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Sahil Dalvi"
                img={SAHIL_DALVI}
                post="Chief Marketing Officer"
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
                color="purple"
                name="Gayatri Vernerkar"
                img={GAYATRI_VERNEKAR}
                post="Public Relations Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Divija Jha"
                img={DIVIJA_JHA}
                post="Public Relations Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Joy Purohit"
                img={JOY_PUROHIT}
                post="Chief PR Officer"
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
                color="green"
                name="Aayushi Joshi"
                img={AAYUSHI_JOSHI}
                post="Sponsorship Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="green"
                name="Shivam Paliwal"
                img={SHIVAM_PALIWAL}
                post="Sponsorship Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="green"
                name="Akanksha Jadhav"
                img={AKANKSHA_JADHAV}
                post="Sponsorship Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="green"
                name="Aayush Shah"
                img={AAYUSH_SHAH}
                post="Sponsorship Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="green"
                name="Mayuri Vakte"
                img={MAYURI_VAKTE}
                post="Chief Sponsorship Officer"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md>
              <MemberCard
                color="blue"
                name="Darsh Bavishi"
                img={DARSH_BAVISHI}
                post="Execution Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Chaitravi Chalke"
                img={CHAITRAVI_CHALKE}
                post="Execution Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Kshitij Gaikwad"
                img={KSHITIJ_GAIKWAD}
                post="Execution Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Tejas Bhandari"
                img={TEJAS_BHANDARI}
                post="Chief Execution Officer"
              />
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
