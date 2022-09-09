//import * as React from 'react';
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./List.css";
import UserProfileView from "./UserProfile/Profile.js";
import TypeView from "./Type.js";
import { Grid, Stack, Typography } from "@mui/material";
import Job from "./data/Jobs";
import Chip from '@mui/material/Chip';
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function ListComponent() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div class="animate-fade">
      <Grid container item xs={12}>
        <Grid item xs={2}>
          <UserProfileView />
          <br></br>
          <TypeView />
        </Grid>
        <Grid item xs={10}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={106}>
              <Typography>Showing 
                <span style={{ color: "#3873ff", textAlign: "center" }}> 1.120 </span>
                Jobs
                <span style={{ color: "#3873ff", textAlign: "center" }}> Quality Assurance </span>in
                <span style={{ color: "#3873ff", textAlign: "center" }}> Jakarta </span>
              </Typography>
              <Chip variant="outlined" label="Dated Posted" icon={<KeyboardArrowDownOutlinedIcon />}/>
            </Stack>
            <Stack direction="row">
              <Job />
              <Job />
              <Job />
            </Stack>
            <Stack direction="row">
              <Job />
              <Job />
              <Job />
            </Stack>
            <Stack direction="row">
              <Job />
              <Job />
              <Job />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
