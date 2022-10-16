import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImagesGrid = () => {
    return (
        <ImagesGridContainer className="image-grid-container">
            <Typography variant="h1">
                Når den sidste tid skal elskes...
            </Typography>

            <Box className="grid-inner-wrapper">
                <Box className="text-wrapper">
                    <Typography>
                        Consecteur adipisicin in elusmos tempor incididunt the
                        labore dolore is magnaliua veniam nostrud exercitation
                        in ullamco
                    </Typography>
                    <Typography>
                        laboris aliquip an consequa the prehene occaecas
                        cupidatat laborum erspiciatis unomnis voluptatem there
                        accusantium laudantium aperiam.
                    </Typography>

                    <Stack className="btn-wrapper">
                        <Link to="/read-more">read more</Link>
                    </Stack>
                </Box>

                <Grid
                    container
                    className="images-grid"
                    rowSpacing={{ xs: 1, sm: 2 }}
                    columnSpacing={{ xs: 0, sm: 2 }}
                >
                    <Grid item xs={12} sm={6} className="grid-img-wrapper">
                        <img
                            className="grid-item-img"
                            src="/assets/blue.jpg"
                            alt="blue-room-img"
                        />

                        <Box className="gradient-bg">
                            <Typography>
                                UDVALGT HOSPICE LÆS OM DERES
                            </Typography>
                            <Typography>TRYGHEDSCERTIFIKAT</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} className="grid-img-wrapper">
                        <img
                            className="grid-item-img"
                            src="/assets/marble.jpg"
                            alt="marble-img"
                        />

                        <Box className="inner-box">
                            <img
                                className="inner-box-logo"
                                src="/assets/logo.png"
                                alt="logo"
                            />

                            <Typography>HVILKET HOSPICE</Typography>
                            <Typography>ER BEDST</Typography>

                            <Stack className="btn">
                                <Link to="/dotanion">Donation</Link>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} className="grid-img-wrapper">
                        <img
                            className="grid-item-img"
                            src="/assets/hands.jpg"
                            alt="hands-img"
                        />
                        <Box className="gradient-bg">
                            <Typography>Lorem ipsum dolor sit</Typography>
                            <Typography>amet, consectetur</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} className="grid-img-wrapper">
                        <img
                            className="grid-item-img"
                            src="/assets/m_w.jpg"
                            alt="m_w-img"
                        />
                        <Box className="gradient-bg">
                            <Typography>Mauris maximus nisi et</Typography>
                            <Typography>sapien tristique, quis</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} className="grid-img-wrapper">
                        <img
                            className="grid-item-img"
                            src="/assets/office.jpg"
                            alt="office-img"
                        />
                        <Box className="gradient-bg">
                            <Typography>Aenean suscipit leo nec</Typography>
                            <Typography>est convallis faucibus</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} className="grid-img-wrapper">
                        <img
                            className="grid-item-img"
                            src="/assets/tablet.jpg"
                            alt="tablet-img"
                        />
                        <Box className="gradient-bg">
                            <Typography>
                                HVAD KAN VI FORVENTE I FREMTIDEN
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ImagesGridContainer>
    );
};

const ImagesGridContainer = styled(Box)`
    margin-bottom: 110px;
    h1 {
        font-size: 36px;
        font-weight: 700;
        padding: 40px 0;
        color: #fff;
        background: var(--theme-red);
        text-align: center;
        margin-bottom: 75px;
    }

    .grid-inner-wrapper {
        margin: 0 auto;
        padding: 0 10px;
        max-width: var(--max-width);
    }

    .text-wrapper {
        margin-bottom: 80px;

        p {
            font-size: 16px;
            text-align: center;

            &:last-of-type {
                margin-bottom: 45px;
            }
        }
    }

    .btn-wrapper {
        a {
            margin: 0 auto;
            padding: 20px 40px;
            color: var(--theme-red);
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            border: 1px solid #be1522;

            &:hover {
                background: var(--theme-red);
                color: #fff;
            }
        }
    }

    .grid-img-wrapper {
        max-height: 300px;
        position: relative;

        img.grid-item-img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            max-height: 300px;
        }
    }

    .gradient-bg,
    .inner-box {
        position: absolute;
        top: 8px;
        bottom: 8px;
        left: 8px;
        right: 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        color: #fff;
        text-transform: uppercase;
        justify-content: end;
        background: linear-gradient(
            4deg,
            rgba(0, 0, 0, 0.7035013834635417) 0%,
            rgba(255, 255, 255, 0) 70%
        );

        p {
            font-weight: 700;
        }
    }

    .inner-box-logo {
        margin-bottom: 30px;
        width: 80%;
    }

    .inner-box {
        justify-content: center;
        align-items: center;
        background: none;
        color: var(--theme-red);

        .btn a {
            margin-top: 20px;
            padding: 10px 20px;
            background: var(--theme-red);
            color: #fff;
            font-size: 12px;
            font-weight: 700;
        }

        .btn a:hover {
            background: rgba(190, 21, 34, 0.8);
        }

        .logo-wrapper {
            flex: 1;
            img {
                width: initial;
            }
        }
    }

    @media (max-width: 576px) {
        margin-bottom: 30px;
        h1 {
            font-size: 26px;
            padding: 20px 0;
            margin-bottom: 30px;
        }

        .text-wrapper {
            margin-bottom: 30px;

            p {
                &:last-of-type {
                    margin-bottom: 30px;
                }
            }
        }

        .btn-wrapper {
            a {
                padding: 15px 30px;
                color: #fff;
                border: none;
                background: var(--theme-red);
            }
        }

        .gradient-bg,
        .inner-box {
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
        }

        .inner-box-logo {
            margin-bottom: 20px;
            width: 40%;
        }

        .grid-img-wrapper {
            max-height: initial;
            height: 250px;
        }
    }
`;

export default ImagesGrid;
