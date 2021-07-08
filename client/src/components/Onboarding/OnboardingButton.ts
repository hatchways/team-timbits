import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface Props {
    classes: any,
    submit: any,
    text: string,
    submitForm: any
}

const styles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    color: '#eee',
    textTransform: 'none',
    width: '8rem',
    height: '2.5rem',
    alignSelf: 'center',
    margin: '1rem 0 0.5rem 0',
  },
}))

function CustomButton({ classes, submitForm, text }: Props) {
    return (
        <Button className={classes.root} onclick={submitForm}>
            {text}
        </Button>
    );
}

export default CustomButton
