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

const BackCallsPanel = () => {

    const initialRows = useMemo(() => backCall.backCalls.map((item) => {
        return {
            id: item.id,
            name: item.name,
            phone: item.phone,
            email: item.email,
            statusId: item.status.id
        }
    }), [JSON.stringify(backCall.backCalls)]);

    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState({});

    const columns = useMemo(() => [
        {field: 'id', headerName: "ID"},
        {field: 'name', headerName: "Наименование", editable: false},
        {field: 'phone', headerName: "Номер телефона", editable: false},
        {field: 'email', headerName: "Email", editable: false},
        {
            field: 'statusId',
            headerName: "Статус",
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

export default BackCallsPanel;