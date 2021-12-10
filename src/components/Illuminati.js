import React from "react";
import { Grid } from "@mui/material";
import HeroCommon from "./HeroCommon";
import illuminati_events from "../content/illuminati_events";
import past_illuminati from "../content/past_illuminati";


const IlluminatiEvenItem = (props) => {

    const res = props.results;

    return(
        <div className="illuminati-even-item">
            <Grid container spacing = {6}>
                <Grid item xs={3} classname="poster">
                    <img src={props.poster} height={250}/>
                </Grid>
                <Grid item xs={8} className="even-text">
                    <h2>{props.name}</h2>
                    <h3>{props.overview}</h3>
                    <ol>
                        {res.map((message, index) => <h4>{index+1}. {message}</h4>)}
                    </ol>
                </Grid>
            </Grid>
        </div>
    );
};

const IlluminatiOddItem = (props) => {

    const res = props.results;

    return(
        <div className="illuminati-odd-item">
            <Grid container spacing = {6}>
                <Grid item xs={9} className="odd-text">
                    <h2>{props.name}</h2>
                    <h3>{props.overview}</h3>
                    <ol>
                        {res.map((message, index) => <h4>{message} .{index+1}</h4>)}
                    </ol>
                </Grid>
                <Grid item xs={3} className="poster">
                    <img src={props.poster} height={250}/>
                </Grid>
            </Grid>
        </div>
    );
};


const IlluminatiList = () => {
    return (
      <div>
        {illuminati_events.map((il,index) => {
            return (
              index%2==0 ? 
                <Grid item xs={12}>
                  <IlluminatiEvenItem
                    name={il.name}
                    poster={il.poster}
                    overview={il.overview}
                    results={il.results}
                  ></IlluminatiEvenItem>
                </Grid> : 
                <Grid item xs={12}>
                    <IlluminatiOddItem
                        name={il.name}
                        poster={il.poster}
                        overview={il.overview}
                        results={il.results}
                    ></IlluminatiOddItem>
                </Grid>
            );
        })}
      </div>
    );
};

// const PastIlluminatiList = () => {
//     return(
//         <div>
//             {past_illuminati.map((pe) => {
//                 return(
//                     <PastIlluminatiItem name={pe.name} overview={pe.overview}/>
//                 );
//             })}
//         </div>
//     );
// };

const Illuminati = () => {
    return(
        <div>
            <HeroCommon
                imgClass="hero-illuminati"
                title="ILLUMINATI"
                subtitle="WHERE BRANCHES ENGAGE IN A FIERCE BATTLE TO WIN THE GLORIOUS ILLUMINATI CUP"
            ></HeroCommon>
            <div className="illuminati">
                <div className="illuminati-events">
                    <h2>Events of 2021</h2>
                    <IlluminatiList />
                    <h2>Past Events</h2>
                    {/* <PastIlluminatiList /> */}
                </div>
            </div>
        </div>
    );
};
//
export default Illuminati;