import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import qs from 'qs';

import './Form.css';

export default function Form() {   
    const [text, setText] = useState('Saisir un texte');
    const [result, setResult] = useState('Saisissez un texte et appuyez sur le bouton "Envoyer" !');

    const onSubmit = () => {
        axios.post('http://localhost:8080/reverse', qs.stringify({ text: text}), { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
             .then( response => setResult(response.data));
    };

    const handleChange = e => {
        setText(e.target.value);
    }

    return (
        <div id="Form">
            <Box id="box" component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                <p id="result">{result}</p>
            </Box>

            <TextField
                id="outlined-multiline-flexible"
                label="Texte"
                multiline
                maxRows={4}
                value={text}
                onChange={handleChange}
            />

            <Button variant="contained" onClick={onSubmit}>Envoyer</Button>
        </div>
    );
}