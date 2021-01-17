import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


export default function Trategy () {
    // render() {
        return (
            <div className="strategy">
                <h1>Guiding your knowlege</h1>
                <div className="strategy__status">
                    <div className="strategy__status__item">
                        <i class="fa fa-microphone"></i>
                        <h4>Đào tạo theo chuẩn Âu Mỹ</h4>
                        <p>Học lý thuyết kết hợp với thực hành dự dự án thực tế để không bị buồn ngủ giữa giờ.</p>
                    </div>
                    <div className="strategy__status__item">
                    <i class="fa fa-chart-bar"></i>
                        <h4>Kiến thức thực tế</h4>
                        <p>Kiến thức hợp lý. Nhiều học viên học xong đều muốn học tiếp nữa.</p>
                    </div>
                    <div className="strategy__status__item">
                    <i class="fa fa-chart-line"></i>
                        <h4>Cam kết việc làm</h4>
                        <p>Hổ trợ tìm việc làm sau khi hoàn thành khóa học.</p>
                    </div>
                </div>
                <div className="let__contact">
                    <h5>Vậy tại sao bạn không đăng ký ngay khóa học của chúng tôi nhỉ?</h5>
                    <Button variant="contained" color="primary">Primary</Button>
                </div>
            
            </div>
        )
    // }
}
   