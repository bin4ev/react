const Form = ({
    setBarberValue,
    submit,
    name,
    description,
    imageUrl
    
}) => {
    return (
        <div className='form'>
            <div className='form-data'>
                <form onSubmit={submit}>
                    <input type='text' name='name' placeholder='Name' value={name}
                     onChange={(e)=>
                     setBarberValue((prevState)=>{return{...prevState ,name: e.target.value }})}>
                     </input>
                    < input type='text' name='description' placeholder='Description' value={description} onChange={(e)=>
                        setBarberValue((prevState)=>{return{...prevState,description: e.target.value }})}></input>
                    <br />
                    <input type='text' name='imageUrl' placeholder='imageUrl' value={imageUrl}
                    onChange={(e)=>
                    setBarberValue((prevState)=>{return{...prevState,imageUrl: e.target.value }})}>
                    </input>
                    <br />
                    <button className='btn btn-dark'>Submit</button>
                </form>
            </div>
        </div >
    );
}

export default Form;