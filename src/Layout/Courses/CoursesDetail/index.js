import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCourseInItem } from '../../../redux/actions/courseItems'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
      color:'blue',
      margin:'auto'
    },
  });

export default function CoursesDetail(props) {
    const classes = useStyles();

    const { courseItem, loading, error } = useSelector(state => state.courseItemReducer);
    // const [ courseDetail, setCourseDetail ] = useState([])

    // var url = window.location.pathname;
    // var courseID = url.slice(9)
    // console.log(courseID)
    // console.log(url)
    // console.log(window.match.params.courseID)

    const courseID = props.match.params.courseID;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourseInItem(courseID))
        console.log(courseID)
        // setCourseDetail(courseFilter);
    }, [])
    // let courseDetail = courseList.filter((item, index) => {
    //     return item.maKhoaHoc == courseID;
    // })

    // console.log(courseList);
    // console.log(courseDetail)

    if(loading){
        return (
            <div className={classes.root}>
                <Typography variant="h5" align="center">...loading</Typography> 
            </div>
        )
    } else{
        return (
            <Container maxWidth="sm">
                <Box my={3}>
                <div key={courseItem.maKhoaHoc}>
                    <Typography variant="h4" align="center" gutterBottom color="primary">
                        {courseItem.tenKhoaHoc}
                    </Typography> 
                    <img src={courseItem.hinhAnh} alt="" style={{width:'100%',maxHeight:"450px"}}/>
                    <Box mt={3}>
                        <Typography variant="body1" gutterBottom>{courseItem.moTa}</Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="body1" gutterBottom>Node.js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.

Node.js is intended to run on a dedicated HTTP server and to employ a single thread with one process at a time. Node.js applications are event-based and run asynchronously. Code built on the Node platform does not follow the traditional model of receive, process, send, wait, receive. Instead, Node processes incoming requests in a constant event stack and sends small requests one after the other without waiting for responses.

This is a shift away from mainstream models that run larger, more complex processes and run several threads concurrently, with each thread waiting for its appropriate response before moving on.

One of the major advantages of Node.js, according to its creator Ryan Dahl, is that it does not block input/output (I/O). Some developers are highly critical of Node.js and point out that if a single process requires a significant number of CPU cycles, the application will block and that the blocking can crash the application. Proponents of the Node.js model claim that CPU processing time is less of a concern because of the high number of small processes that Node code is based on.</Typography>
                    </Box>
                    <p><b>Lượt xem: </b>{courseItem.luotXem} </p>
                    <span><b>Giảng viên: </b>{courseItem?.nguoiTao?.hoTen}</span>
                </div>
                </Box>
            </Container>

        )
    }

    
}
