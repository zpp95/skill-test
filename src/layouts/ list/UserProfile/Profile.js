import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Paper, Typography, Divider, Stack } from "@mui/material";
import WorkOutlineSharp from "@mui/icons-material/WorkOutlineSharp";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import styles from "./Profile.module.css";

function UserProfileView() {
  return (
    <div className={styles.userProfile__container}>
      <Paper className={styles.userProfile__paperContainer}>
        <span style={{ position: "relative", float: "right" }}>
          <BorderColorOutlinedIcon />
        </span>
        <Avatar
          src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          sx={{ width: 60, height: 60 }}
          style={{marginLeft: "70px"}}
        />
        <Typography variant="h6" component="h5">
          Adhitya Putra
        </Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={styles.userProfile__caption}
        >
          Quality Assurance enthusiast, Freelance QA Utest
        </Typography>
        <Divider />
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={styles.userProfile__caption}
        >
          <WorkOutlineSharp />
          Applied Jobs
        </Typography>
      </Paper>
    </div>
  );
}

export default UserProfileView;
