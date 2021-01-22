import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getCourseList } from '../../redux/actions/useAPICourses';
import { deleteCourseAdmin } from '../../redux/actions/Admin/deleteCourses';
import { Redirect } from 'react-router-dom';
import DeleteCourses from './deleteCourses';
import TakeInfoOfStudent from './takeInfoOfStudent'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 245,
    height: 400,
    margin: 20,


  },
  media: {
    height: 140,
  },
});


export default function ShownAllCourses() {
  const history = useHistory();
  const classes = useStyles();
  const { courseList, loading, error } = useSelector((state) => state.courseReducer);
  const { deleteCourse } = useSelector((state) => state.deleteCoursesAdminReducer)

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Hello!!!");
    dispatch(getCourseList());
  }, []);

  const deleteCourseAd = (values) => {
    console.log(values)
    console.log(typeof values)

    dispatch(deleteCourseAdmin(values))
  }

  console.log("Hello!!!");
  if (deleteCourse) {
    console.log(deleteCourse);
    return <Redirect to="/admin/users" />
  }
  return (

    <div className="container mt-3">
      <div className="row">
        {courseList.map((item) => {
          //    const courseID = `/admin/updateCourses/${courseList.maKhoaHoc}`
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
              <Button variant="outlined" size="small" color="primary" onClick={() => history.push(`/admin/updateCourses/${item.maKhoaHoc}`)} >
                UPDATE
                      </Button>
              <Button variant="contained" color="secondary" size="small" onClick={() => deleteCourseAd(item.maKhoaHoc)}>
                DELETE
                      </Button>
              <Button variant="contained" color="primary" size="small"  onClick={() => history.push(`/admin/takeInfoOfStudent/${item.maKhoaHoc}`)} >
                LẤY THÔNG TIN HỌC VIÊN
                      </Button>
            </CardActions>
          </Card>
        })}
      </div>



    </div>
  )
}

