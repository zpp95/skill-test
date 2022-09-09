import * as React from "react";
import { Stack, Grid, Paper, Chip } from "@mui/material";
import styles from "./Jobs.module.css";
import Typography from "@mui/material/Typography";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import google from "../Image/google.png"

export default function Job() {
  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          height: 300,
          width: 320,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <div className={styles.box_container}>
          <div className={styles.image_container}>
            <img
              src={google}
              alt="nothing"
            />
          </div>
          <div className={styles.text_container}>
            <Typography>
              Quality Assurance Tester Manual Intern
            </Typography>
            <Typography className={styles.text_caption}>
              Google . Jakarta Pusat
            </Typography>
          </div>
          <Chip className={styles.button_label} label="Fulltime" />
          <Chip className={styles.button_label} label="Onsite" />
          <Chip className={styles.button_label} label="Internship" />
          <Typography className={styles.text_caption}>
            Google LLC is an American multinational technology company
            that focu...
          </Typography>
          <div className={styles.image_container}>
            <Stack direction="row">
              <Typography className={styles.text_caption}>
                2 Days ago
              </Typography>
            </Stack>
          </div>
          <div className={styles.text_container}>
            <Stack direction="row" spacing={6}>
              <Typography className={styles.text_applicant}>
                719 Applicant
              </Typography>
              <BookmarkBorderOutlinedIcon className={styles.button_align}/>
            </Stack>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}
