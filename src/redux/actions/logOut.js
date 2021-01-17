export const userLogOut = (value) => {
return (dispatch) => {
    dispatch({
        type: "LOG_OUT",
        value,
    })
}
}