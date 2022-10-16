import React, { useContext } from "react";
import { GlobalContext } from "./global/GlobalState";
import { Routes, Route } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import "./App.css";
import styled from "styled-components";

import { ThemeProvider } from "@mui/material";
import theme from "./global/theme";

import Header from "./components/header/Header";
import ImageBg from "./components/body/ImageBg";
import ImagesGrid from "./components/body/ImagesGrid";
import RedDots from "./components/body/RedDots";
import Carousel from "./components/body/Carousel";
import Footer from "./components/footer/Footer";

import Register from "./components/forms/Register";
import Login from "./components/forms/Login";
import Protected from "./components/protected/Protected";
import NotFound from "./components/notFound/NotFound";

const App = () => {
    const { user } = useContext(GlobalContext);

    return (
        <ThemeProvider theme={theme}>
            <Stack sx={{ height: "100vh" }}>
                <Header />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <BodyWrapper className="body-wrapper">
                                <ImageBg />
                                {user && (
                                    <React.Fragment>
                                        <ImagesGrid />
                                        <RedDots />
                                        <Carousel />
                                        <Footer />
                                    </React.Fragment>
                                )}
                            </BodyWrapper>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <Protected user={user}>
                                <Register />
                            </Protected>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Protected user={user}>
                                <Login />
                            </Protected>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Stack>
        </ThemeProvider>
    );
};

const BodyWrapper = styled(Box)`
    ::-webkit-scrollbar {
        display: none;
    }

    height: 100%;
    overflow-y: scroll;
`;

export default App;
