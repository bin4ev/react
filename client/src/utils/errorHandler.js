const errorHandler = (err) => {
    return (
        <div class="alert alert-danger" role="alert">
            {err.error.message}
        </div>
    );
}

export default errorHandler;