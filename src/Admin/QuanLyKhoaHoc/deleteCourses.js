import React from 'react'

export default function DeleteCourses() {
    return (
        <div className="modal fade" id="deleteCourseModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Xóa khóa học</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        Bạn có chắc chắn muốn xóa khóa học này không?
      </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Xóa</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
