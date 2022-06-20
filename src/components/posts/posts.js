import React from 'react'
import Post from './post/post';
import {Grid, CircularProgress} from '@material-ui/core';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  console.log(posts);
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignContent='stretch' spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
          <Post post={post} /> 
        </Grid>
      ))}
      </Grid>
    )

  )
}

export default Posts
