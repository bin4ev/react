const notification = (info) => {
    return (info ?
        <div class='alert alert-dark' style={{ display: 'block' }} role='alert'>{info}</div>
        :
        <div class='alert alert-dark' style={{ display: 'none' }} role='alert'>{info}</div>);
}

export default notification;