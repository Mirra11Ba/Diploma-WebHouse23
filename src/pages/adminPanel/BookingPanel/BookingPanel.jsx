import React, {useMemo} from 'react';
import {DataGrid, GridActionsCellItem, GridRowModes} from "@mui/x-data-grid";
import EditToolBar from "../components/EditToolBar";
import Box from "@mui/material/Box";
import house from "../../../store/house";
import backCall from "../../../store/backCall";
import district from "../../../store/district";
import developer from "../../../store/developer";
import material from "../../../store/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import status from "../../../store/status";
import HouseService from "../../../api/services/HouseService";
import BackCallsService from "../../../api/services/BackCallsService";
import booking from "../../../store/booking";

const BookingPanel = () => {

    const initialRows = useMemo(() => booking.bookings.map((item) => {
        return {
            id: item.id,
            date: new Date(Date.parse(item.time)).toLocaleString(),
            phone: item.user.phone,
            name: item.user.name,
            houseId: item.house.id,
            statusId: item.status.id
        }
    }), [JSON.stringify(booking.bookings)]);

    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState({});

    // код скопирован из backcall, только header name new
    const columns = useMemo(() => [
        {field: 'id', headerName: "ID"},
        {field: 'date', headerName: "Дата", editable: false, flex: 1},
        {field: 'phone', headerName: "Телефон клиента", editable: false, flex: 2},
        {field: 'name', headerName: "Имя клиента", editable: false, flex: 2},
        {field: 'houseId', headerName: "Код дома", editable: false},
        {
            field: 'statusId',
            headerName: "Статус брони",
            editable: true,
            type: 'singleSelect',
            valueOptions: status.statuses,
            getOptionValue: (value) => value.id,
            getOptionLabel: (value) => value.name,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: '',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,

                ];
            },
        },
    ], [rowModesModel])

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const processRowUpdate = async (newRow) => {
        const updatedRow = { ...newRow, isNew: false };

        console.log(newRow)
        //console.log(await BackCallsService.changeStatus(newRow.id, newRow.statusId))
        /*        if (newRow.isNew) {
            console.log(await BackCallsService.addBackCall(newRow))
        } else {

        }*/

        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowEditStart = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleRowEditStop = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleEditClick = (id) => () => {
        console.log(GridRowModes.Edit)
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick =  (id) => async () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    /*    const handleDeleteClick =  (id) => async () => {

            console.log(await HouseService.deleteHouse(id))
            setRows(rows.filter((row) => row.id !== id));
        };*/

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }

    };

    return (
        <div>
            <Box sx={{width: '100%', height: '80vh'}}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    autoPageSize={true}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStart={handleRowEditStart}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    onProcessRowUpdateError={(error) => console.log(error)}
                />
            </Box>
        </div>
    );
};

export default BookingPanel;