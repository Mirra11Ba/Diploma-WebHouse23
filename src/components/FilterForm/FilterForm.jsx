import React, {useState} from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import {styled} from "@mui/material";
import {Box, MenuItem} from '@mui/material'
import Select from "@mui/material/Select";
import styles from './FilterForm.module.css'
import {SmallButton} from "../styled/buttons/SmallButton";


const Input = styled(TextField)(({theme}) => ({
    width: '47%'
}))

const FilterForm = () => {

    const [startCost, setStartCost] = useState(5000000);
    const [endCost, setEndCost] = useState(20000000);
    const [startMeters, setStartMeters] = useState(100);
    const [endMeters, setEndMeters] = useState(500);
    const areas = [
        {id: 1, title: 'ЮМР', value: 'umr'},
        {id: 2, title: 'КМР', value: 'kmr'},
        {id: 3, title: 'ФМР', value: 'fmr'},
        {id: 4, title: 'ГМР', value: 'gmr'},
    ];
    const [selectedArea, setSelectedArea] = useState(areas[0]);


    const levels = [
        {id: 1, title: '1 этаж', value: 1},
        {id: 2, title: '2 этажа', value: 2},
        {id: 3, title: '1 этаж', value: 3},
        {id: 4, title: '1 этаж', value: 4},
        {id: 5, title: '1 этаж', value: 5},
        {id: 6, title: '1 этаж', value: 6},
        {id: 7, title: '1 этаж', value: 7},
        {id: 8, title: '1 этаж', value: 8},
    ];
    const [selectedLevels, setSelectedLevels] = useState(levels[0]);

    const handleAreaChange = (event) => {
        setSelectedArea(event.target);
    }

    const handleLevelsChange = (event) => {
        setSelectedLevels(event.target);
    }

    const handleStartCostChange = (e) => {
        setStartCost(e.target.value);
    }
    const handleEndCostChange = (e) => {
        setEndCost(e.target.value);
    }
    const handleStartMetersChange = (e) => {
        setStartMeters(e.target.value);
    }
    const handleEndMetersChange = (e) => {
        setEndMeters(e.target.value);
    }

    const handleCostSliderChange = (event, newValue, o) => {
        setStartCost(newValue[0])
        setEndCost(newValue[1])
    }

    const handleMetersSliderChange = (event, newValue, o) => {
        setStartMeters(newValue[0])
        setEndMeters(newValue[1])
    }

    return (
        <div className={styles.main} >
            <h4>Фильтры</h4>

            <Grid
                container
                spacing={2}
                sx={{
                    maxWidth: '930px',
                    margin: 'auto',
                    display: 'flex',
                    p: 2,
                    border: '1px solid black',
                    borderRadius: 1,
                }}>
                <Grid item md={8}>
                    <p>Стоимость ₽</p>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Input
                            variant={'outlined'}
                            value={startCost}
                            onChange={handleStartCostChange}
                            type={'number'}
                        ></Input>
                        <Input
                            variant={'outlined'}
                            value={endCost}
                            onChange={handleEndCostChange}
                            type={'number'}
                        ></Input>
                    </Box>

                    <Slider
                        size="small"
                        value={[startCost, endCost]}
                        onChange={handleCostSliderChange}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        max={20000000}
                        min={5000000}
                        step={100000}
                    />
                </Grid>
                <Grid item md={4}>
                    <p>Район</p>
                    <Select sx={{
                        width: '80%'
                    }}
                            value={selectedArea.value}
                            onChange={handleAreaChange}
                    >
                        {areas.map((area) => {
                            return <MenuItem value={area.value} key={area.id}>
                                {area.title}
                            </MenuItem>
                        })}
                    </Select>
                </Grid>

                <Grid item md={8}>
                    <p>Метраж дома</p>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Input
                            variant={'outlined'}
                            value={startMeters}
                            onChange={handleStartMetersChange}
                            type={'number'}/>
                        <Input
                            variant={'outlined'}
                            value={endMeters}
                            onChange={handleEndMetersChange}
                            type={'number'}
                        />
                    </Box>

                    <Slider
                        size="small"
                        value={[startMeters, endMeters]}
                        onChange={handleMetersSliderChange}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        max={500}
                        min={100}
                        step={10}
                    />
                </Grid>
                <Grid item md={4}>
                    <p>Этажи</p>
                    <Select sx={{
                        width: '80%'
                    }}
                            value={selectedLevels.value}
                            onChange={handleLevelsChange}
                    >
                        {levels.map((level) => {
                            return <MenuItem value={level.id} key={level.id}>
                                {level.title}
                            </MenuItem>
                        })}
                    </Select>
                </Grid>

                <Grid item xs={12} sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex'
                }}>
                    <SmallButton>
                        Применить
                    </SmallButton>
                </Grid>

            </Grid>
        </div>
    );
};

export default FilterForm;