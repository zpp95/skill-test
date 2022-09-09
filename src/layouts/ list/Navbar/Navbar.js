import React from "react";
import styles from "./Navbar.module.css";
import { Avatar, Grid, TextField, Box, Stack } from "@mui/material";
import PinIcon from "@mui/icons-material/PinDrop";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <h2 className={styles.navbar__logo}>
            GO
            <span style={{ color: "#3873ff", textAlign: "center" }}>WORK</span>
          </h2>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={13} marginTop={1}>
            <TextField
            id="outlined-basic"
            className={styles.navbar_textbox}
            placeholder="Search for job"
            variant="outlined"
            size="small"
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
                ),
            }}
            />
            <TextField
            id="outlined-basic"
            className={styles.navbar_textbox}
            placeholder="Add country or city"
            variant="outlined"
            size="small"
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <PinIcon />
                </InputAdornment>
                ),
            }}
            />
            <button className={styles.navbar__searchButton}>Search</button>
          </Stack>
        </Grid>
        <Grid item xs={4} className={styles.navbar_notification}>
          <Stack direction="row" spacing={1.5} style={{ marginTop: "15px", marginLeft: "130px" }}>
            <MessageOutlinedIcon />
            Messages
            <NotificationsOutlinedIcon />
            Notification
            <Avatar
            style={{ textAlign: "center", marginBottom: "2px" }}
            alt="Human Picture by Ike louie Natividad"
            src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            Me
            <KeyboardArrowDownOutlinedIcon />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
