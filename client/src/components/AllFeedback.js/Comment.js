import React, { useEffect, useState } from 'react';
import { Collapse, Button, CardBody, Card, UncontrolledCollapse } from 'reactstrap';

import api from '../../services/apiContact';
let readMessage = true;
const Comment = ({
    comment,
    count,
    commentIsDeleted,
}) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => {
        setIsOpen(!isOpen)
        readMessage = false

    }
 
 
    const deleteHandler=(id)=>{
    
      api.deleteComment(id)
      .then(res=>commentIsDeleted(res))
      .catch(err=>console.log(err))
    }
 
    return (
        <div className='border' style={{ marginBottom: '1rem' }}>
            <Button onClick={()=>deleteHandler(comment._id)} color='danger' style={{ float: 'right' }}>Delete</Button>
            <Button color={!readMessage ? 'secondary' : 'primary'} onClick={toggle} style={{ marginBottom: '1rem' }}>Message:{count}</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <strong>name: </strong>
                        {comment.username}
                        <br />
                        <strong>email: </strong>
                        {comment.useremail}
                        <br />
                        <strong>message: </strong>
                        <br />
                        {comment.usermessage}
                    </CardBody>
                </Card>
            </Collapse>

        </div>



    );
}

export default Comment;