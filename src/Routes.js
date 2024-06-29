import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Board from './board';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/board" element={<Board />} />
        </Routes>
    );
};

export default AppRoutes;