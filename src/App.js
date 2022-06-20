import React, { useEffect } from 'react';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {getPosts} from './actions/posts';
import memories from './images/memories.jpeg';
import Posts from './components/posts/posts';
import Form from './components/form/Form';
import useStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height="60"/>
        </AppBar>
        <Grow in>
          <Grid container spacing={3} justify='space-between' alignItems='stretch'>
          <Grid item xs={12} sm={7}>
            <Posts/>
          </Grid>
          <Grid item xs={12} sm={5}>
          <Form/>
          </Grid>
          </Grid>
        </Grow>
      </Container>
    </>
  );
}

export default App;
