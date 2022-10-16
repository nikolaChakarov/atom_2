import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../global/GlobalState";
import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import styled from "styled-components";
import { topMenu, bottomMenu, bottomMenuLogged } from "../../utils/links";
import { Menu, Close } from "@mui/icons-material";

const HeaderMobile = () => {
    const [open, setOpen] = useState(false);
    const { user, dispatch } = useContext(GlobalContext);

    const links = user ? [...topMenu, ...bottomMenu] : bottomMenuLogged;

    const handleLogout = () => {
        setTimeout(() => {
            dispatch({
                type: "LOGOUT",
            });
        }, 300);

        localStorage.removeItem("user");
        handleLinkClick();
    };

    const openMenu = () => {
        setOpen(true);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    const handleLinkClick = () => {
        setTimeout(() => {
            setOpen(false);
        }, 300);
    };

    return (
        <HeaderMobileContainer open={open}>
            <Stack
                className="hm-logo-bttn"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <img className="hm-logo" src="/assets/logo_02.png" alt="logo" />
                {open ? (
                    <Close className="menu-icon" onClick={closeMenu} />
                ) : (
                    <Menu className="menu-icon" onClick={openMenu} />
                )}
            </Stack>

            {open && (
                <Stack className="hm-menu-links">
                    {links.map((l, idx) =>
                        l.name === "Logout" ? (
                            <Link key={idx} to={l.link} onClick={handleLogout}>
                                {l.name}
                            </Link>
                        ) : (
                            <Link
                                key={idx}
                                to={l.link}
                                onClick={handleLinkClick}
                            >
                                {l.name}
                            </Link>
                        )
                    )}
                </Stack>
            )}
        </HeaderMobileContainer>
    );
};

const HeaderMobileContainer = styled(Box)`
    background: #fefefe;

    .menu-icon {
        font-size: 40px;
        color: var(--theme-red);
    }

    .hm-logo-bttn {
        padding: 15px 10px;
        box-shadow: ${({ open }) =>
            open ? "none" : "0 1px 2px rgba(0, 0, 0, 0.5)"};
        position: relative;
    }

    .hm-logo {
        max-width: 50px;
    }

    .hm-menu-links {
        position: absolute;
        z-index: 1000;
        left: 0;
        right: 0;
        background: #fff;
        border-top: 1px solid var(--theme-red);
        border-bottom: 1px solid var(--theme-red);

        a {
            padding: 15px 5px;
            text-align: center;
            border-bottom: 1px groove #fff;
            font-weight: 600;
            text-transform: uppercase;
            color: #777;

            &:last-of-type {
                border-bottom: none;
            }

            &:hover {
                background: var(--theme-red);
                color: #fff;
            }
        }
    }
`;

export default HeaderMobile;
