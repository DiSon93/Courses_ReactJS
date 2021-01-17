// import React, { useState, useEffect, useMemo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getUserAcount } from '../../redux/actions/User/ThongTinTaiKhoan';
// import { getCourseList } from '../../redux/actions/useAPICourses'

// export default function UserAccount() {
//     const { currentUser, loading, error } = useSelector((state) => state.loginReducer);
//     console.log(currentUser.email);
//     const { courseList } = useSelector((state) => state.courseReducer)
//     const { userAccount } = useSelector((state) => state.userAccountReducer);

//     // const [ myCourses, setMyCourses ] = useState([]);

//     const dispatch = useDispatch();

//     const user = {
//         taiKhoan: currentUser.taiKhoan,
//         matKhau: currentUser.matKhau,
//     }


//     useEffect(() => {
//         dispatch(getUserAcount(user));
//         dispatch(getCourseList());
//     }, []);
//     console.log(userAccount);

//     let myCourses = [];


//          userAccount.chiTietKhoaHocGhiDanh.map(item => {
//             let myCourse = courseList.filter((itemFilter) => {
//                 return itemFilter.tenKhoaHoc == item.tenKhoaHoc
//             })
//             console.log(myCourse)
//             myCourses.push(myCourse);
//             console.log(myCourses)
//             return myCourses
//         })
       
 




//     return (
//         <div >
//             {myCourses.map(item => {
//                 return (<div>
//                     <p>Hình ảnh: {item.hinhAnh}</p>
//                     <p>Tên khóa học: {item.tenKhoaHoc}</p>
//                 </div>)
//             })}

//         </div>
//     )
// }
