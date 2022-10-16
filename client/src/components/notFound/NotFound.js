import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
    return (
        <NotFoundContainer>
            <Box className="nf-inner-wrapper">
                <Typography variant="h1">Not Found :)</Typography>
            </Box>
        </NotFoundContainer>
    );
};

const NotFoundContainer = styled(Box)`
    @keyframes moving {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    height: 100%;
    .nf-inner-wrapper {
        box-sizing: border-box;
        height: 100%;
        margin: auto;
        max-width: var(--max-width);
        display: flex;
        align-items: center;
    }

    h1 {
        text-transform: uppercase;
        font-weight: 700;
        animation: moving 5s infinite;
        text-align: center;
    }
`;

export default NotFound;
