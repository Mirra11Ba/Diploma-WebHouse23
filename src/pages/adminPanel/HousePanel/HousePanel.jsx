import React, {useMemo} from 'react';
import house from "../../../store/house";
import district from "../../../store/district";
import developer from "../../../store/developer";
import material from "../../../store/material";
import Box from "@mui/material/Box";
import {DataGrid, GridActionsCellItem, GridRowModes} from "@mui/x-data-grid";
import EditToolBar from "../components/EditToolBar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import HouseService from "../../../api/services/HouseService";
import {House} from "@mui/icons-material";

const HousePanel = () => {

    const initialRows = useMemo(() => house.houses.map((item) => {
        return {
            id: item.id,
            name: item.name,
            districtId: item.district.id,
            developerId: item.developer.id,
            image: item.image,
            description: item.description,
            area: item.area,
            landPlotSize: item.landPlotSize,
            materialId: item.material.id,
            numberOfFloors: item.numberOfFloors,
            numberOfRooms: item.numberOfRooms,
            price: item.price
        }
    }), [JSON.stringify(house.houses)]);

    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState({});

    const columns = useMemo(() => [
        {field: 'id', headerName: "ID"},
        {field: 'name', headerName: "Наименование", editable: true},
        {
            field: 'districtId',
            headerName: "Район",
            editable: true,
            type: 'singleSelect',
            valueOptions: district.districts,
            getOptionValue: (value) => value.id,
            getOptionLabel: (value) => value.name,
        },
        {
            field: 'developerId',
            headerName: "Риелтор",
            editable: true,
            type: 'singleSelect',
            valueOptions: developer.developers,
            getOptionValue: (value) => value.id,
            getOptionLabel: (value) => value.name,
        },
        {
            field: 'image',
            headerName: 'Фото',
            editable: true,
            renderCell: (params) => (
                <img src={params.row.image} alt="" style={{width: '100%'}}/>
            )
        },
        {field: 'description', headerName: "Описание", editable: true, flex: 1},
        {field: 'area', headerName: "Площадь дома", editable: true},
        {field: 'landPlotSize', headerName: "Площадь участка", editable: true},
        {
            field: 'materialId',
            headerName: "Материал",
            editable: true,
            type: 'singleSelect',
            valueOptions: material.materials,
            getOptionValue: (value) => value.id,
            getOptionLabel: (value) => value.name,
        },
        {field: 'numberOfFloors', headerName: "Кол-во этажей", editable: true, type: 'number'},
        {field: 'numberOfRooms', headerName: "Кол-во комнат", editable: true, type: 'number'},
        {field: 'price', headerName: "Цена", editable: true, type: 'number'},
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
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
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
        if (newRow.isNew) {
            console.log(await HouseService.addHouse(newRow))
        } else {
            console.log(await HouseService.updateHouse(newRow))
        }

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

    const handleDeleteClick =  (id) => async () => {
        /*const deletedRow = rows.find(row => row.id === id);
        console.log(deletedRow)*/
        console.log(await HouseService.deleteHouse(id))
        setRows(rows.filter((row) => row.id !== id));
    };

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

    console.log(rowModesModel)

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
                    slots={{
                        toolbar: EditToolBar,
                    }}
                    slotProps={{
                        toolbar: { setRows, setRowModesModel },
                    }}
                />
            </Box>
        </div>
    );
};

export default HousePanel;