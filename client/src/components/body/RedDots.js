import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { redDots } from "../../utils/links";

const RedDots = () => {
    return (
        <RedDotsContainer>
            <Stack className="rd-inner">
                <Typography variant="h1">HOSPICEGUIDEN</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, potenti at torquent dui augue
                    nunc mattis an vulputate totam curabitur ante imperdiet
                </Typography>
                <Typography>
                    vestibulum sem pede ut dolor sem in sem suspendisse nec
                    duis, nibh sit laoreet eu vitae enim odio id mollis fusce
                    est tempor.
                </Typography>

                <Grid
                    container
                    className="dots-wrapper"
                    justifyContent="space-around"
                    rowGap={{ xs: 1.5 }}
                >
                    {redDots.map((dot, idx) => (
                        <Grid item key={idx} xs={12} sm={3}>
                            <Dot {...dot} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </RedDotsContainer>
    );
};

const Dot = (props) => {
    const { url, imgSrc, text } = props;

    return (
        <DotContainer className="dot">
            <Link to={url} className="dot-img-wrapper">
                <img src={imgSrc} alt="logo" />
            </Link>

            {text &&
                text.map((el, idx) => <Typography key={idx}>{el}</Typography>)}
        </DotContainer>
    );
};

const DotContainer = styled(Stack)`
    img {
        width: 80px;
        height: 80px;
    }

    .dot-img-wrapper {
        width: 215px;
        height: 215px;
        border-radius: 50%;
        background: var(--theme-red);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 40px;
    }

    p {
        font-size: 17px;
        font-weight: 700;
    }

    @media (max-width: 576px) {
        img {
            width: 60px;
            height: 60px;
        }

        .dot-img-wrapper {
            width: 165px;
            height: 165px;
            margin: 0 auto 30px;
        }
    }
`;

const RedDotsContainer = styled(Box)`
    margin-bottom: 110px;
    text-align: center;

    .rd-inner {
        padding: 0 10px;
        max-width: var(--max-width);
        margin: 0 auto;
    }

    h1 {
        font-size: 36px;
        font-weight: 700;
        color: var(--theme-red);
        margin-bottom: 40px;
    }

    .dots-wrapper {
        margin-top: 60px;
    }

    @media (max-width: 576px) {
        margin-bottom: 30px;

        h1 {
            font-size: 26px;
            font-weight: 700;
            color: var(--theme-red);
            margin-bottom: 15px;
        }

        .dots-wrapper {
            margin-top: 15px;
        }
    }
`;

export default RedDots;
