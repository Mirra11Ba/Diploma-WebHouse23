import React, {useMemo} from 'react';
import Box from "@mui/material/Box";
import {DataGrid, GridActionsCellItem, GridRowModes} from "@mui/x-data-grid";
import EditToolBar from "../components/EditToolBar";
import house from "../../../store/house";
import user from "../../../store/user";
import district from "../../../store/district";
import developer from "../../../store/developer";
import material from "../../../store/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import HouseService from "../../../api/services/HouseService";

const UsersPanel = () => {


    const initialRows = useMemo(() => user.users
        .filter(item => item.roles.filter(role => role.id === 2).length !== 0)
        .map((item) => {
        return {
            id: item.id,
            surname: item.surname,
            name: item.name,
            patronymic: item.patronymic,
            phone: item.phone,
        }
    }), [JSON.stringify(user.users)]);

    const [rows, setRows] = React.useState(initialRows);

    const columns = useMemo(() => [
        {field: 'id', headerName: "ID"},
        {field: 'surname', headerName: "Фамилия", editable: false, flex: 1},
        {field: 'name', headerName: "Имя", editable: false, flex: 1},
        {field: 'patronymic', headerName: "Отчество", editable: false, flex: 1},
        {field: 'phone', headerName: "Номер телефона", editable: false, flex: 1},
    ], [])


    return (
        <div>
            <Box sx={{width: '100%', height: '80vh'}}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    editMode="row"
                    autoPageSize={true}
                />
            </Box>
        </div>
    );
};

export default UsersPanel;