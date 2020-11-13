import React from 'react';

import { StyledBurger } from './Hamburger.styled';

export const Burger = (props) => {
    const { setOpen, open, size } = props;

    return (
        <StyledBurger onClick={setOpen} open={open} size={size}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};
