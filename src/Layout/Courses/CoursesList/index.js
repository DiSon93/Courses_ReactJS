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


export default function CoursesList() {
    const classes = useStyles();
    const { courseList, loading, error } = useSelector((state) => state.courseReducer);

    const dispatch = useDispatch();

    useEffect(()=> {
        console.log("Hello!!!");
        dispatch(getCourseList());
    }, []);

    console.log("Hello!!!");
    return (
       
        <div className="container mt-3">
            <div className="row">
                {courseList.map((item) => {
                    return  <Card className={classes.root}>
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
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                })}
            </div>
            
        </div>
    )
}

