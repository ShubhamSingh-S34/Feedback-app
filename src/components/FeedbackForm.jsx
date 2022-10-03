import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [message, setMessage] = useState('');








    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage('');
        }
        else if (text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("Text should be atleast 10 charactres")
        }
        else {
            setBtnDisabled(false);
            setMessage("");
        }
        setText(e.target.value);
    }

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }
            setText("");
        }

    }



    return <Card>
        <h2>How would you rate us?</h2>
        <RatingSelect select={(rating) => { setRating(rating) }} />
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" onChange={handleTextChange} placeholder='Please give us a review!' value={text} />
                <Button type='submit' version='secondary' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card >

}

export default FeedbackForm