import { useState, useEffect ,useContext} from 'react';
import api from '../../services/apiContact';
import Comment from './Comment';
import TokenContext from '../Context/TokenContext';

const Allfeedback = () => {
    
    const [token] = useContext(TokenContext);
    const [comments, setComments] = useState([]);
    const [commentIsDeleted, setCommentIsDeleted] = useState('');
    useEffect(() => {
        api.getAllComments(token)
            .then(data => setComments(data))
            .catch(err => console.log(err))
    }, [commentIsDeleted]);


    return (
        <div className='container'>
            {comments.map(x => <Comment
                comment={x}
                count={comments.indexOf(x) + 1} 
                commentIsDeleted={setCommentIsDeleted}
                />)}
                
        </div>
    );
}

export default Allfeedback;