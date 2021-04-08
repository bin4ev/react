const errorHandler = (message) => {
    return (message ?
        <div class='alert alert-danger' style={{ display: 'block' }} role='alert'>{message}</div>
        :
        <div class='alert alert-danger' style={{ display: 'none' }} role='alert'>{message}</div>);
}

export default errorHandler;