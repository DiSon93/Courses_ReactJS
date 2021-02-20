import React , { memo } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteCourseAdmin } from '../../redux/actions/Admin/deleteCourses';
import { Redirect } from 'react-router-dom';

function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const { deleteCourse, loading, error } = useSelector((state) => state.deleteCoursesAdminReducer)

//   const { idKhoaHoc } = this.props;
//   console.log(idKhoaHoc);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const deleteCourseAd = (values) => {
    console.log(values)
    console.log(typeof values)

    dispatch(deleteCourseAdmin(values))
  }

  if (deleteCourse) {
    console.log(deleteCourse);
    return <Redirect to="/admin/users" />
  }

  return (
    <div>
      <Button  variant="contained" color="secondary" size="small" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Xóa khóa học?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Bạn có đủ dũng cảm để xóa khóa học này không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}  variant="contained"  size="small"  color="primary">
            Đéo
          </Button>
          <Button variant="contained" color="secondary" size="small"  autoFocus onClick={() => deleteCourseAd(props.idKhoaHoc)}>
            Xóa mẹ đi
          </Button>
          {error ?  <MessageModal errorMessage={error} /> : null}
         
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default  memo (AlertDialog)

function MessageModal(props) {
    const [open, setOpen] = React.useState(true);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Lỗi"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {props.errorMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained"  size="small"  color="primary">
              OK
            </Button>
          
          </DialogActions>
        </Dialog>
      </div>
    );
  }