import * as yup from 'yup';

export const yupSchema = yup.object().shape({
    taiKhoan: yup.string().required().min(2,"Too Short!!").max(11,"Too Long!!"),
    matKhau: yup.string().required().min(3,"Too Short!!"),
    hoTen: yup.string().required(),
    soDT: yup.string().required().matches(/^[0-9]+$/),
    maNhom: yup.string().required(),
    email: yup.string().required().email("Email is invalid"),
    maKhoaHoc: yup.string().required(),
    biDanh: yup.string().required(),
    tenKhoaHoc: yup.string().required(),
    moTa: yup.string().required().min(10,"Too Short!!"),
    hinhAnh: yup.string().required(),
    maNhom: yup.string().required(),
    ngayTao: yup.string().required(),
    maDanhMucKhoaHoc: yup.string().required(),  
    taiKhoanNguoiTao: yup.string().required(),
})
