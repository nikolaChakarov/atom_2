import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { carouselDb } from "../../utils/links";

import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

const Carousel = () => {
    const [step, setStep] = useState(0);

    const handleCarouselClick = (num) => {
        const dataLength = carouselDb.length - 1;

        num < 0
            ? step <= 0
                ? setStep(dataLength)
                : setStep((prev) => prev + num)
            : step >= dataLength
            ? setStep(0)
            : setStep((prev) => prev + num);
    };

    return (
        <CarouselContainer>
            <Box className="cc-inner-wrapper">
                <img className="logo" src="/assets/logo_02.png" alt="logo" />
                <Typography variant="h1">
                    Vi anvendte HospiceGuiden fordi...
                </Typography>

                <Stack className="carousel">
                    <Box className="c-body">
                        <RenderSlide index={step} />
                    </Box>
                    <ArrowBackIos
                        className="c-icon c-icon-left"
                        onClick={() => handleCarouselClick(-1)}
                    />

                    <ArrowForwardIos
                        className="c-icon c-icon-right"
                        onClick={() => handleCarouselClick(1)}
                    />
                </Stack>
            </Box>
        </CarouselContainer>
    );
};

const RenderSlide = ({ index }) => {
    const currentSlide = carouselDb[index];
    const { title, imgSrc, name, info } = currentSlide;

    return (
        <Box className="slider">
            <Typography className="s-title">{title}</Typography>
            <Box className="s-image-wrapper">
                <img className="s-img" src={imgSrc} alt="person_photo" />
            </Box>
            <Typography className="s-name">{name}</Typography>
            <Typography className="s-info">{info}</Typography>
        </Box>
    );
};

const CarouselContainer = styled(Box)`
    margin-bottom: 90px;

    .cc-inner-wrapper {
        max-width: var(--max-width);
        margin: 0 auto;
        text-align: center;
        padding: 0 10px;

        img.logo {
            max-width: 40px;
            margin-bottom: 15px;
        }

        h1 {
            font-size: 26px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 55px;
        }
    }

    .carousel {
        position: relative;

        .c-icon {
            position: absolute;
            color: #c6c6c6;
            font-size: 44px;
            top: 50%;
            transform: translateY(-50%);
            transition: all 0.2s ease-in-out;

            &:hover {
                cursor: pointer;
                color: #000;
            }
        }

        .c-icon.c-icon-left {
            left: -50px;
        }

        .c-icon.c-icon-right {
            right: -50px;
        }
    }

    .slider {
        .s-title {
            margin-bottom: 40px;
        }

        .s-image-wrapper {
            width: 126px;
            height: 126px;
            margin: 0 auto;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin-bottom: 27px;
        }

        .s-img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .s-name {
            font-size: 17px;
            font-weight: bold;
        }

        .s-info {
            font-size: 12px;
            text-transform: uppercase;
            color: #636262;
        }
    }

    @media (max-width: 576px) {
        margin-bottom: 30px;

        .cc-inner-wrapper {
            img.logo {
                margin-bottom: 10px;
            }

            h1 {
                font-size: 20px;
                font-weight: 700;
                margin-bottom: 30px;
            }
        }

        .carousel {
            padding: 5px 0;

            .c-icon {
                position: absolute;
                color: #c6c6c6;
                font-size: 44px;
                top: 50%;
                transform: translateY(-50%);
                transition: all 0.2s ease-in-out;

                &:hover {
                    cursor: pointer;
                    color: #000;
                }
            }

            .c-icon.c-icon-left {
                left: 0px;
            }

            .c-icon.c-icon-right {
                right: -8px;
            }
        }

        .slider {
            .s-title {
                margin-bottom: 20px;
            }

            .s-image-wrapper {
                margin-bottom: 20px;
            }
        }
    }
`;

export default Carousel;
