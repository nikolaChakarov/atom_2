import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";

const ImageBg = () => {
    return (
        <ImageBgContainer>
            <Box className="image-wrapper">
                <img src="/assets/bg.jpg" alt="background_image" />
            </Box>

            <Stack className="main-text-wrapper">
                <Typography variant="h1">
                    Nemo voluptatem quia voluptas
                </Typography>
                <Typography variant="h2">dolores ratione voluptatem</Typography>
            </Stack>
        </ImageBgContainer>
    );
};

const ImageBgContainer = styled(Stack)`
    position: relative;
    height: 100%;
    max-height: 860px;

    .image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .main-text-wrapper {
        position: relative;
        z-index: 1;
        max-width: var(--max-width);
        margin: auto auto 80px;
        padding: 0 10px;

        h1 {
            font-size: 60px;
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;
            color: #fff;
            margin-bottom: 40px;
        }

        h2 {
            font-size: 46px;
            font-weight: 200;
            text-transform: uppercase;
            text-align: center;
            color: #fff;
        }
    }

    @media (max-width: 576px) {
        .main-text-wrapper {
            margin: auto 0;
            padding: 10px;
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(255, 255, 255, 0) 50%,
                rgba(0, 0, 0, 0.5) 100%
            );
            h1 {
                font-size: 40px;
                font-weight: 700;
                margin-bottom: 20px;
            }

            h2 {
                font-size: 26px;
            }
        }
    }
`;

export default ImageBg;
