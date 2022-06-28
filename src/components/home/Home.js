import React from 'react';
import { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {getPosts} from '../../actions/posts';
import Posts from '../posts/posts';
import Form from '../form/Form';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
  },[currentId, dispatch]);
  return (
    <>
    <Grow in>
        <Container> 
          <Grid container spacing={3} justify='space-between' alignItems='stretch'>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId = {setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={5}>
          <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
          </Grid>
          </Grid>
        </Container>
        </Grow>
    </>
  )
}

export default Home
