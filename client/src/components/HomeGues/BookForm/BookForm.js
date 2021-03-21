import './BookForm.css'

function BookForm() {

    return (
        <div className='book-wrapper'>
            <form className='form'>
                <div >
                    <h4>Please book your appointment</h4>
                    <input type="text" name="name" placeholder='Enter your name:' />
                    <br />
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" placeholder='Enter your phone number:' />
                    <br />
                    <label for="service">Service</label>
                    <br/>
                    <select name= 'service'>
                    <option value="SkinFade">Skin Fade</option>
                    <option value="DryCut">Dry Cut</option>
                    <option value="Beard">Beard</option>
                    </select>
                </div>
                <input type="submit" value="book" />
            </form>
        </div>

    )

}
export default BookForm;