import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import Button from "@mui/material/Button";
import AuthService from "../../../api/services/AuthSevice";
import user from "../../../store/user";
import Box from "@mui/material/Box";
import fetchData from "../../../hooks/fetchData";
import BackCallsService from "../../../api/services/BackCallsService";
import backCall from "../../../store/backCall";

export const loader = async () => {
    await fetchData();
    await backCall.fetchBackCalls();
    return null

}

const AdminPage = () => {

    const handleClick = async () => {
        await user.login('admin', 'admin')
    }

    return (
        <div>
            <h4>Администрирование</h4>
            {/*<Button onClick={handleClick}>
                cringe
            </Button>*/}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box>
                    <Button component={Link} to={'houses'}>
                        Дома
                    </Button>
                    <Button component={Link} to={'backCalls'}>
                        Заявки
                    </Button>
                </Box>

                <Button component={Link} to={'/'}>
                    Вернуться на главную страницу
                </Button>
            </Box>
            <Outlet/>
        </div>
    );
};

export default AdminPage;