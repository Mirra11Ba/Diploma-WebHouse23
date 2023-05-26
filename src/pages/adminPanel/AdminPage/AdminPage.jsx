import React from 'react';
import {Outlet} from 'react-router-dom';

const AdminPage = () => {
    return (
        <div>
            <h4>Администрирование</h4>

            <Outlet/>
        </div>
    );
};

export default AdminPage;