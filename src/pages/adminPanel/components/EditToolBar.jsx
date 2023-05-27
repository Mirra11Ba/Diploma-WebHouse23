import React from 'react';
import Button from "@mui/material/Button";
import {GridRowModes, GridToolbarContainer} from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
import house from "../../../store/house";

const EditToolBar = (props) => {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {

        const id = house.houses[house.houses.length - 1].id + 1;
        console.log(id)
        setRows((oldRows) => [...oldRows, {
            id,
            name: '',
            districtId: 1,
            developerId: 1,
            image: '',
            area: 100,
            landPlotSize: 101,
            materialId: 1,
            numberOfFloors: 1,
            numberOfRooms: 1,
            price: 5000000,
            isNew: true
        }]);

        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));

    };

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                Добавить запись
            </Button>
        </GridToolbarContainer>
    );
};

export default EditToolBar;