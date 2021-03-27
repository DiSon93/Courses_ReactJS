import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCourseList } from '../../../redux/actions/useAPICourses';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 245,
    height: 600,
    margin: 20,
    textAlign: 'center',
    color: 'red'
  },
  media: {
    height: 140,
  },
});

const useLoading = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },

}));

const useAlert = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CoursesList() {
  const classes = useStyles();
  const loadingStyle = useLoading();
  const alerts = useAlert();

  const { courseList, loading, error } = useSelector((state) => state.courseReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Hello!!!");
    dispatch(getCourseList());
  }, []);

  console.log("Hello!!!");
  if (loading) {
    return (
      <Container maxWidth="sm">
        <Typography gutterBottom variant="h5" component="h2" align="center">...Loading</Typography>
        <div className={loadingStyle.root}>
          <CircularProgress />
        </div>
      </Container>
    )
  } else if (error) {
    return (
      <div>
        ...error
      </div>
    )

  } else {
    return (
      <div className="container mt-3">
        <div className="row">
          {courseList.map((item) => {
            return <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.hinhAnh}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.tenKhoaHoc}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.moTa}
                  </Typography>
                </CardContent>
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
          })}
        </div>

      </div>
    )
  }

}

