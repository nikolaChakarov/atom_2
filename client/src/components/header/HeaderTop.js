import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import styled from "styled-components";
import { topMenu } from "../../utils/links";

const HeaderTop = () => {
    return (
        <StyledContainer>
            <Stack
                sx={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
                direction="row"
            >
                <Stack className="inner-top-menu-wrapper">
                    <Box className="logo-wrapper">
                        <img src="/assets/logo.png" alt="logo" />
                    </Box>

                    {topMenu.map((menuItem, idx) => (
                        <Box key={idx} className="menu-item">
                            <Link to={menuItem.link}>{menuItem.name}</Link>
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </StyledContainer>
    );
};

const StyledContainer = styled(Box)`
    border-bottom: 1px groove #fff;

    .inner-top-menu-wrapper {
        padding: 5px 10px;
        flex-direction: row;
        align-items: center;

        .logo-wrapper {
            margin-right: 45px;

            img {
                max-width: 95px;
            }
        }

        .menu-item {
            margin-right: 18px;

            &:last-child {
                margin-right: 0;
            }

            a {
                color: #5f5f5f;
                font-size: 12px;
            }
        }
    }

    @media (max-width: 576px) {
        .inner-top-menu-wrapper {
            flex-direction: column;
        }
    }
`;

export default HeaderTop;
