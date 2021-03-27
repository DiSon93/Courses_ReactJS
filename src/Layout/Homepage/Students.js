import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCourseList } from '../../redux/actions/useAPICourses';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { Link } from 'react-router-dom';

import {shorternText} from '../../utils/shorternText'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Students() {
  const classes = useStyles();

  const { courseList, loading, error } = useSelector((state) => state.courseReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseList())
    console.log(courseList)
  }, []);

  let topCourseList = courseList.sort((course, nextCourse) => {
    return nextCourse.luotXem - course.luotXem
  })

  let topEightCourses = topCourseList.splice(8, topCourseList.length - 8)

  return (

    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom align="center">
        Top most viewed courses
      </Typography>
      <Box p={8}>
        <Grid container spacing={3} p={10}>
          {topCourseList.map((item) => {
            return (
              <Grid item xs={3}>
                <Card className={classes.root} mb={6} style={{height:'420px'}}>
                  <CardActionArea>
                    <Link to={`/courses/${item.maKhoaHoc}`}>
                      <CardMedia
                        className={classes.media}
                        image={item.hinhAnh}
                        title={item.tenKhoaHoc}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.tenKhoaHoc}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          <Box component="div" my={2}>
                            {shorternText(item.moTa)} 
                          </Box>
                        </Typography>
                        <Box mt={2}>
                          <Typography variant="caption" display="block" gutterBottom pt={5}>
                            View: {item.luotXem}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Link>
                  </CardActionArea>

                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                      </Button>
                    <Link to={`/courses/${item.maKhoaHoc}`}>
                      Learn More
                    </Link>


                  </CardActions>
                </Card>
              </Grid>
            )
          })
          }
        </Grid>
      </Box>
    </Container>

  )

}
