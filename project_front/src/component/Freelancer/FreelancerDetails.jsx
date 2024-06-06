import React from "react";
import { Link } from "react-router-dom";

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
} from "@mui/material";

export default function FreelancerDetails() {
  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Freelancer Details
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ marginTop: "2rem" }}>
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
                <TableRow>
                  <TableCell>example@example.com</TableCell>
                  <TableCell>123</TableCell>
                  <TableCell>React, JavaScript, CSS</TableCell>
                  <TableCell>2 years</TableCell>
                  <TableCell>5/5</TableCell>
                  <TableCell>May 30, 2024</TableCell>
                  <TableCell>
                    Experienced React developer looking for new opportunities.
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button variant="contained" color="primary">
                        {" "}
                        Accept{" "}
                      </Button>
                      <Button variant="contained" color="info">
                        {" "}
                        Declined{" "}
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
}
