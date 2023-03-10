import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


const FormInput = ({ name, label }) => {
    const { control } = useFormContext();
    const isError = false;

    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <TextField
                        fullWidth
                        label={label}
                    />
                )}
            />
        </>
    );
}

export default FormInput;