import Navbar from "./Navbar";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import merchimg from "../assets/MERCH_prati.png"; 
import toteimg from "../assets/oceania.png";
import NeonButton from "./NeonButton";
import HeroCommon from "./HeroCommon";

const theme = createTheme();

export default function Album() {
  return (
    <div>
      <main>
        {/* Hero unit */}
          <HeroCommon
        imgClass="hero-starrynight"
        title="PRATIBIMB MERCH"
        subtitle="Checkout the exclusive merch for Prati2im3!"
      ></HeroCommon>
            {/* <Typography
              component="h1"
              variant="h2"
              align="center"
            //   color="#ffcaff"
              color = "text.primary"
              gutterBottom
            >
              Pratibimb Merch
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Checkout the exclusive merch for Prati2im3!
            </Typography> */}
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack> */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={2}>
              <Grid item key="t-shirt" xs={12} sm={12} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    // sx={{
                    //   // 16:9
                    //   pt: '56.25%',
                    // }}
                    image={merchimg}
                    alt="t-shirt"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h7" component="h3" align="center">
                    <NeonButton href="https://docs.google.com/forms/d/e/1FAIpQLSfIRMCuSisI5lGOdNL5YJBA3sL1ZnJPRdGu-YhPoK0WFQ9AwA/viewform">Order Now!</NeonButton>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key="tote-bag" xs={12} sm={12} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    // sx={{
                    //   // 16:9
                    //   pt: '56.25%',
                    // }}
                    image={toteimg}
                    alt="t-shirt"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h7" component="h3" align="center">
                    <NeonButton href="https://docs.google.com/forms/d/e/1FAIpQLSdvpqCSDr7iqHcjWDvxX8cxsEelBeN0Q0mheeq-t7ZYLmkWAQ/viewform">Order Now!</NeonButton>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      </div>
  );
}

function Merch(){
    return(
        <div>
            <Navbar />
            <div>
                <h1>Pratibimb Merch</h1>
                <h2>T-shirts!</h2>
                <h2>Tote Bags!</h2>
            </div>
        </div>
    );
}



//export default Merch;