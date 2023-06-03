import React, {useEffect, useState} from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import {styled} from "@mui/material";
import {Box, MenuItem} from '@mui/material'
import Select from "@mui/material/Select";
import styles from './FilterForm.module.css'
import {SmallButton} from "../styled/buttons/SmallButton";
import house from "../../store/house";
import district from "../../store/district";


const Input = styled(TextField)(({theme}) => ({
    width: '47%'
}))

const FilterForm = ({callback}) => {

    const [startCost, setStartCost] = useState(5000000);
    const [endCost, setEndCost] = useState(20000000);
    const [startMeters, setStartMeters] = useState(100);
    const [endMeters, setEndMeters] = useState(500);

    const areas = [
        {id: 0, title: 'Все', value: 'all'},
        {id: 1, title: 'ЮМР', value: 'umr'},
        {id: 2, title: 'КМР', value: 'kmr'},
        {id: 3, title: 'ФМР', value: 'fmr'},
        {id: 4, title: 'ГМР', value: 'gmr'},
    ];
    const [selectedArea, setSelectedArea] = useState(1);

    const levels = [
        {id: 0, title: 'Любое', value: 0},
        {id: 1, title: '2 этаж', value: 1},
        {id: 2, title: '2 этажа', value: 2},
        {id: 3, title: '1 этаж', value: 3},
    ];
    const [selectedLevels, setSelectedLevels] = useState(levels[0]);

    const handleAreaChange = (event, name) => {
        console.log(event.target.value)
        setSelectedArea(event.target.value);
    }

    const handleLevelsChange = (event, name) => {
        console.log(name.props)
        setSelectedLevels(name.props);
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

    const handleApplyFilters = () => {
        let arr = house.houses.filter(item => item.price >= startCost
            && item.price <= endCost
            && item.area >= startMeters && item.area <= endMeters
        )

        console.log(selectedLevels);
        console.log(selectedArea)

        if (selectedArea !== 0) {
            arr = arr.filter(item => item.district.id === selectedArea);
        }

        if (selectedLevels.children && selectedLevels.children !== 'Любое') {
            //arr = arr.filter(item => item.)
        }

        console.log(arr)
        callback(arr);
    }


    return (
        <div className={styles.main} style={{marginTop: "30px", marginBottom: "80px"}}>
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
                    marginTop: "30px",
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
                        min={100000}
                        step={100000}
                    />
                </Grid>
                <Grid item md={4}>
                    <p>Район</p>
                    <Select sx={{
                        width: '80%'
                    }}
                            value={selectedArea}
                            onChange={handleAreaChange}
                    >
                        {district.districts.map((area) => {
                            return <MenuItem value={area.id} key={area.id}>
                                {area.name}
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
                            return <MenuItem value={level.value} key={level.id}>
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
                    <SmallButton onClick={handleApplyFilters}>
                        Применить
                    </SmallButton>
                </Grid>

            </Grid>
        </div>
    );
};

export default FilterForm;