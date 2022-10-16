import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const Error = ({ message }) => {
    return (
        <ErrorContainer>
            <Typography>{message}</Typography>
        </ErrorContainer>
    );
};

const ErrorContainer = styled(Box)`
    p {
        background-color: var(--theme-red);
        color: #fff;
        padding: 5px 10px;
        font-size: 12px;
        transition: all 1s ease-in-out;
        border-radius: 3px;
    }
`;

export default Error;
