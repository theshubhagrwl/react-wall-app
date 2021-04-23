import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  grid: {
    // cols: 4,
    width: "10%",
  },
  titleBar: {
    display: "flex",
    flexWrap: "wrap",
  },
  image: {
    objectPosition: "center",
    objectFit: "contain",
    maxHeight: "30vh",
    maxWidth: "50vw",
  },
}));

const Walls = ({ walls }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} justify="center" alignItems="center">
        {walls.map((wall) => (
          <Grid
            key={wall.id}
            item
            xs={12}
            sm={6}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* <Paper className={classes.paper}> */}
            <img src={wall.small_img} className={classes.image} />
            <Typography variant="h6">{wall.title}</Typography>
            <a href={wall.url} alt="url for original image">
              <Button variant="contained" color="primary">
                Download Original Image
              </Button>
            </a>
            <Typography variant="body1">Author: {wall.author}</Typography>
            {/* </Paper> */}
          </Grid>
        ))}
      </Grid>
      {/* <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList}>
        {walls.map((wall) => (
          <GridListTile
            key={wall.id}
            className={classes.grid}
            cols={1}
            rows={2}
          >
            <img src={wall.small_img} alt={wall.title} />
            <GridListTileBar
              className={classes.titleBar}
              title={wall.title}
              subtitle={<span>by: {wall.author}</span>}
              // actionIcon={
              //   <IconButton
              //     aria-label={`info about ${wall.title}`}
              //     className={classes.icon}
              //   >
              //     <InfoIcon />
              //   </IconButton>
              // }
            />
          </GridListTile>
        ))}
      </GridList>
    </div> */}
    </>
  );
};

export default Walls;
