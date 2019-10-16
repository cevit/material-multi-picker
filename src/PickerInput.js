import React from "react";
import { func, string, bool, node, object, any } from "prop-types";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const ONE_QUARTER = 0.25;
const ONE_HALF = 0.5;

const styles = theme => ({
    InputRoot: {
        display: "flex",
        flexWrap: "wrap",
        padding: `${ theme.spacing(ONE_HALF) }px 0`,
        boxSizing: "border-box"
    },
    InputLabelRoot: {
        top: theme.spacing()
    },
    InputLabelFilled: {
        top: theme.spacing(2)
    },
    InputLabelShrink: {
        top: 0
    },
    inputRoot: {
        flex: "1 1 auto",
        marginTop: theme.spacing(ONE_QUARTER),
        minWidth: "200px",
        width: "auto"
    }
});

const isFilledOrOutlined = variant => ["filled", "outlined"].includes(variant);

function getInputPaddingStyle(variant) {
    if ( variant === "outlined" ) {
        return { padding: "18.5px 14px" };
    }
    if ( variant === "filled" ) {
        return { padding: "27px 12px 10px" };
    }
}

function PickerInput({ value, onChange, startAdornment, classes, fullWidth, label,
    onBlur, onFocus, onKeyDown, disabled, error, variant, helperText, required, name, inputRef, autoFocus, ...otherProps
}) {
    const InputProps = {
        inputProps: {
            ...otherProps,
            className: classes.inputRoot,
            style: isFilledOrOutlined(variant) ? { padding: "6.5px 0" } : undefined,
        },
        style: getInputPaddingStyle(variant),
        startAdornment,
        classes: { root: classes.InputRoot },
        inputRef
    };

    //this ensures that the label will be shown above the input field if there are selected items,
    //even if there is no input text
    const InputLabelProps = {
        shrink: Boolean(value.length || startAdornment),
        classes: {
            root: classes.InputLabelRoot,
            shrink: classes.InputLabelShrink,
            filled: classes.InputLabelFilled
        }
    };
    return (
        <TextField
            autoFocus={ autoFocus }
            label={ label }
            value={ value }
            onChange={ onChange }
            onFocus={ onFocus }
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
    autoFocus: bool,
    disabled: bool,
    error: bool,
    label: string,
    value: string.isRequired,
    onChange: func,
    onBlur: func,
    onFocus: func,
    onKeyDown: func,
    fullWidth: bool,
    startAdornment: node,
    variant: string,
    classes: object,
    helperText: node,
    required: bool,
    name: string,
    inputRef: any
};

PickerInput.defaultProps = {
    label: "",
    fullWidth: false,
    startAdornment: false
};

export default withStyles(styles)(PickerInput);
