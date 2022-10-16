import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalState";
import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import styled from "styled-components";
import { bottomMenu, bottomMenuLogged } from "../../utils/links";

const HeaderBottom = () => {
    const { user, dispatch } = useContext(GlobalContext);
    const menu = user ? bottomMenu : bottomMenuLogged;

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        });

        localStorage.removeItem("user");
    };

    return (
        <StyledContainer>
            <Stack
                sx={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
                direction="row"
            >
                <Stack className="inner-bottom-menu-wrapper">
                    {menu.map((menuItem, idx) =>
                        menuItem.name === "Logout" ? (
                            <Box key={idx} className="menu-item">
                                <Link to={menuItem.link} onClick={handleLogout}>
                                    {menuItem.name}
                                </Link>
                            </Box>
                        ) : (
                            <Box key={idx} className="menu-item">
                                <Link to={menuItem.link}>{menuItem.name}</Link>
                            </Box>
                        )
                    )}
                </Stack>

                <Stack className="btn-wrapper">
                    <Link to="/dotanion">Donation</Link>
                </Stack>
            </Stack>
        </StyledContainer>
    );
};

const StyledContainer = styled(Box)`
    border-bottom: 4px solid #be1522;

    .inner-bottom-menu-wrapper {
        padding: 25px 10px;
        flex-direction: row;
        align-items: center;

        .menu-item {
            margin-right: 37px;

            &:last-child {
                margin-right: 0;
            }

            a {
                color: #5f5f5f;
                padding-bottom: 10px;
                font-size: 16px;
                font-weight: 700;
                text-transform: uppercase;
                color: #000;
                transition: all 0.1s ease;
            }

            a:hover {
                padding-bottom: 10px;
                border-bottom: 4px solid var(--theme-red);
            }

            &:first-child a.home {
                border-bottom: 4px solid #be1522;
            }
        }
    }

    .btn-wrapper {
        margin: 0 10px 0 auto;
        justify-content: center;

        a {
            padding: 10px 40px;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            background: #be1522;

            &:hover {
                background: rgba(190, 21, 34, 0.8);
            }
        }
    }

    @media (max-width: 576px) {
        .inner-top-menu-wrapper {
            flex-direction: column;
        }
    }
`;

export default HeaderBottom;
