import React from "react";
import { func, string, bool, node, object } from "prop-types";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const ONE_QUARTER = 0.25;
const ONE_HALF = 0.5;

const styles = theme => ({
    InputRoot: {
        display: "flex",
        flexWrap: "wrap",
        padding: `${ theme.spacing.unit * ONE_HALF }px 0`
    },
    InputLabelRoot: {
        top: theme.spacing.unit
    },
    InputLabelShrink: {
        top: 0
    },
    inputRoot: {
        flex: "1 1 auto",
        marginTop: theme.spacing.unit * ONE_QUARTER,
        minWidth: "200px",
        width: "auto"
    }
});

function PickerInput({ value, onChange, startAdornment, classes, fullWidth, label, onBlur, onKeyDown, disabled, error, variant, helperText, required, name, ...otherProps }) {
    const InputProps = {
        inputProps: {
            ...otherProps,
            className: classes.inputRoot
        },
        startAdornment,
        classes: { root: classes.InputRoot }
    };

    //this ensures that the label will be shown above the input field if there are selected items,
    //even if there is no input text
    const InputLabelProps = {
        shrink: Boolean(value.length || startAdornment),
        classes: {
            root: classes.InputLabelRoot,
            shrink: classes.InputLabelShrink
        }
    };
    return (
        <TextField
            label={ label }
            value={ value }
            onChange={ onChange }
            onBlur={ onBlur }
            onKeyDown={ onKeyDown }
            InputProps={ InputProps }
            InputLabelProps={ InputLabelProps }
            fullWidth={ fullWidth }
            disabled={ disabled }
            error={ error }
            variant={ variant }
            helperText={ helperText }
            required={ required }
            name={ name }
        />
    );
}

PickerInput.propTypes = {
    disabled: bool,
    error: bool,
    label: string,
    value: string.isRequired,
    onChange: func,
    onBlur: func,
    onKeyDown: func,
    fullWidth: bool,
    startAdornment: node,
    variant: string,
    classes: object,
    helperText: node,
    required: bool,
    name: string
};

PickerInput.defaultProps = {
    label: "",
    fullWidth: false,
    startAdornment: false
};

export default withStyles(styles)(PickerInput);
