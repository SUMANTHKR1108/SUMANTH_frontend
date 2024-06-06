import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  Box,
  TextField,
} from "@mui/material";

export default function ApplicationsDetails() {
  const [jobId, setJobId] = useState("");
  const [formData, setFormData] = useState([]);

  // const [freelancerEmail, setFreelancerEmail] = useState("");

  const findApplication = () => {
    axios
      .get(`http://localhost:8080/getApplication?jobId=${jobId}`)
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setFormData(response.data.data);
        // setEmail(response.data.data.freelancerEmail);
        // setJobId(response.data.data.jobId);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  };

  const applicationStatus = (freelancerEmail) => {
    const status = "ACCEPT";
    console.log(freelancerEmail, jobId, status);
    axios
      .put("http://localhost:8080/applicationStatus", {
        freelancerEmail: freelancerEmail,
        jobId: jobId,
        applicationStatus: status,
      })
      .then((response) => {
        console.log("Status Updated", response);

        console.log(response.data.data);
        if (response.data.data === "updated") {
          alert("Accepted the application");
        }
      })
      .catch((error) => {
        console.log("Error while updatingg", error);
      });
  };
  const declineApplicationStatus = (freelancerEmail) => {
    const status = "DECLINE";
    console.log(freelancerEmail, jobId, status);
    axios
      .put("http://localhost:8080/applicationStatus", {
        freelancerEmail: freelancerEmail,
        jobId: jobId,
        applicationStatus: status,
      })
      .then((response) => {
        console.log("Status Updated", response);

        console.log(response.data.data);
        if (response.data.data === "updated") {
          alert("Declined the application!!");
        }
      })
      .catch((error) => {
        console.log("Error while updatingg", error);
      });
  };

  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Freelancer Details
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 18 }}>
              <Link
                to="/"
                style={{ textDecoration: "variant", color: "black" }}
              >
                <button className="btn btn-outline-success" type="button">
                  Home
                </button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box>
          <TextField
            id="jobId"
            label="JobId"
            variant="outlined"
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            sx={{ "& > :not(style)": { m: 2, width: "25ch" } }}
          />
          <Button variant="contained" sx={{ m: 3 }} onClick={findApplication}>
            Search
          </Button>
        </Box>

        <Container sx={{ marginTop: "3rem" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>JobID</TableCell>
                  <TableCell>Skills</TableCell>
                  <TableCell>Skill Experience</TableCell>
                  <TableCell>Skill Rating</TableCell>
                  <TableCell>Applied_At</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.freelancerEmail}</TableCell>
                    <TableCell>{row.jobId}</TableCell>
                    <TableCell>{row.skills}</TableCell>
                    <TableCell>{row.skillExperience}</TableCell>
                    <TableCell>{row.skillRating}</TableCell>
                    <TableCell>{row.appliedAt}</TableCell>
                    <TableCell>{row.skillDescription}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            applicationStatus(row.freelancerEmail);
                          }}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            declineApplicationStatus(row.freelancerEmail);
                          }}
                        >
                          Decline
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
}
