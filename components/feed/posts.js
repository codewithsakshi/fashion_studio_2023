"use client"
import React from "react";
import data from "@/utilities/data";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  posts: {
    display: "flex",
    flexWrap: 'wrap',
    flexGrow: 1,
    justifyContent: "center"
  },
  postList:{
    listStyle: "none"
  },
  listItemHeader:{
    display: "flex"
  }
}));

export default function Posts() {
  const classes = useStyles();
  const { feed } = data;
    return (
      <Box className={classes.posts}>
          <ul className={classes.postList}>
            <li className={classes.listItem}>
              <Box className={classes.listItemHeader}>
                <img src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_32,c_limit,fl_progressive/assets/images/2021/4/29/55c6f953-3813-4525-9224-03c5b323fa021619686448876-022990c1-3e08-4d83-99e8-3a58f563b5091613476586658-500x500.jpg"></img>
                <div class="css-1dbjc4n r-eqz5dr r-1wbh5a2 r-1h0z5md r-1jkjb" >
                    <div>AVI Living</div>
                    <div>Follow</div>
                    <div>Few minutes ago</div>
                  </div>
              </Box>
            </li>
          </ul>
      </Box>
    )
}