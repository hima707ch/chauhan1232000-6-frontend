import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Global/Header.jsx";
import Footer from "../Global/Footer.jsx";
import HomePage from './HomePage/Body.jsx';

const Body = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/enquiry', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, address, dob })
        });
        const data = await response.json();
        alert(data.message);
    };

    return (
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={(
                    <HomePage>
                        <form onSubmit={handleSubmit}>
                            <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} required />
                            <input type='text' placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} required />
                            <input type='date' value={dob} onChange={e => setDob(e.target.value)} required />
                            <button type='submit'>Submit</button>
                        </form>
                    </HomePage>
                )} />
            </Routes>
          <Footer />
        </Router>
    );
};

export default Body;