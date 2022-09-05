import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GitApp.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function GitApp() {
  const [gitUser, setGitUser] = useState({
    login: "",
    bio: "",
    avatar_url: "",
  });

  const [userRepos, setUserRepos] = useState([]);

  const url = "https://api.github.com/users/";

  const [inputText, setInputText] = useState("");

  function inputValue(text) {
    setInputText(text);
  }

  function resetState() {
    setUserRepos([]);
  }

  const searchButton = () => {
    axios.get(url + inputText).then(({ data }) => {
      setGitUser(data);
    });
    resetState();
  };

  useEffect(() => {
    axios.get(url + (inputText || "dzemildupljak")).then(({ data }) => {
      setGitUser(data);
    });
  }, []);

  const getRepo = async (e) => {
    e.preventDefault();
    const response = await axios.get(gitUser.repos_url);
    setUserRepos(response.data);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        className="background-git"
        wrap="wrap"
        container
        spacing={2}
        columns={0}
        padding={5}
      >
        <Grid item xs={8}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 3, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={(e) => inputValue(e.target.value)}
              id="outlined-basic"
              label="GitUsers"
              variant="outlined"
            />
          </Box>
          <Stack marginLeft={3} direction="column" width={150} spacing={2}>
            <Button onClick={searchButton} variant="contained" color="success">
              Search
            </Button>
            {userRepos.map((el) => {
              return <Div key={el.id}>'Repository:'{el.full_name}</Div>;
            })}
          </Stack>
        </Grid>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="340"
            image={gitUser.avatar_url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {gitUser.login}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {gitUser.bio}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={getRepo} size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
}
