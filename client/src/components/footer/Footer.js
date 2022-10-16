import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { footerQuickLinks } from "../../utils/links";

import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <FooterContainer>
            <Grid
                container
                className="f-inner-wrapper"
                justifyContent="space-between"
                rowGap={{ xs: 1 }}
            >
                <Grid item xs={12} sm={4} className="f-left">
                    <img className="f-logo" src="/assets/logo.png" alt="logo" />
                    <Typography>
                        Curabitur et velit porttitor, tincidunt nibh eget,
                        sodales velit. In consectetur malesuada ipsum non
                        posuere. Vestibulum nunc enim, tincidunt eget egestas
                        et, porttitor in massa. Integer mattis erat vitae
                        vulputate hendrerit. Nulla efficitur sollicitudin
                        tristique. Vivamus pulvinar nisl sed felis ornare, et
                        blandit neque luctus. Pellentesque congue placerat enim,
                        in rutrum lorem facilisis vel.
                    </Typography>
                    <Stack
                        className="f-left-links"
                        direction="row"
                        spacing={1.2}
                        alignItems="center"
                    >
                        <Link className="f-media facebook" to={"#"}>
                            <FacebookIcon />
                        </Link>
                        <Link className="f-media twitter" to={"#"}>
                            <TwitterIcon />
                        </Link>
                        <Link className="logo-wrapper" to={"/"}>
                            <img src="/assets/logo.png" alt="logo" />
                        </Link>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={4} className="f-middle">
                    <Typography variant="h3">Quick links</Typography>
                    {footerQuickLinks.map((l, idx) => (
                        <Link key={idx} to={l.url}>
                            <Typography className="ql-title">
                                {l.title}
                            </Typography>
                            <Typography className="ql-info">
                                {l.info}
                            </Typography>
                        </Link>
                    ))}
                </Grid>

                <Grid item xs={12} sm={2} className="f-right">
                    <Typography variant="h3">KONTAKT OS</Typography>

                    <Stack spacing={4}>
                        <Stack direction="row" spacing={2}>
                            <LocationOnOutlinedIcon className="f-contact-icon" />
                            <Typography>Fredericevej 69 7100 Vejle</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <PhoneEnabledOutlinedIcon className="f-contact-icon" />
                            <Typography>
                                Kontakt os:
                                <br />
                                70 70 80 80
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <EmailOutlinedIcon className="f-contact-icon" />
                            <Typography>
                                E-mail:
                                <br />
                                mail@demolink.org
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography sx={{ marginBottom: "20px" }}>
                            Vi modtager følgende kort:
                        </Typography>
                        <Stack
                            className="payments"
                            direction="row"
                            spacing={1.2}
                        >
                            <Box className="img-wrapper">
                                <img src="/assets/visa.svg" alt="visa" />
                            </Box>
                            <Box className="img-wrapper">
                                <img
                                    src="/assets/mastercard.svg"
                                    alt="mastercard"
                                />
                            </Box>
                            <Box className="img-wrapper">
                                <img src="/assets/paypal.svg" alt="paypal" />
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

            <Box className="f-red">
                <Typography>
                    Copyright &copy; 2019 All Rights Reserved.
                </Typography>
            </Box>
        </FooterContainer>
    );
};

const FooterContainer = styled(Box)`
    background: #efefef;
    padding-top: 55px;

    .f-inner-wrapper {
        max-width: var(--max-width);
        margin: 0 auto;
        padding: 0 10px;
        margin-bottom: 55px;
    }

    .f-red {
        text-align: center;
        padding: 45px 10px;
        background: var(--theme-red);
        color: #fff;

        p {
            font-size: 14px;
        }
    }

    .f-left,
    .f-middle,
    .f-right {
        min-height: 375px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .f-left {
        p {
            font-size: 12px;
            line-height: 28px;
        }

        .f-logo {
            max-width: 110px;
        }
        .f-left-links {
            .f-media {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }

            .f-media.facebook {
                svg {
                    fill: #574d8c;
                    font-size: 50px;
                }
            }

            .f-media.twitter {
                background: #6a97d2;
                svg {
                    fill: #fff;
                    font-size: 30px;
                }
            }

            .logo-wrapper img {
                max-width: 80px;
            }
        }
    }

    .f-middle {
        h3 {
            text-transform: uppercase;
            color: var(--theme-red);
            font-size: 18px;
            font-weight: 700;
        }

        a {
            color: #000;
        }

        .ql-title {
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .ql-info {
            font-size: 12px;
            line-height: 24px;
        }
    }

    .f-right {
        P {
            font-size: 12px;
            line-height: 20px;
        }

        h3 {
            text-transform: uppercase;
            color: var(--theme-red);
            font-size: 18px;
            font-weight: 700;
        }

        .f-contact-icon {
            color: var(--theme-red);
        }

        .payments {
            .img-wrapper {
                display: flex;
                border: 1px solid #777;
                padding: 2px 3px;
                border-radius: 3px;
                overflow: hidden;
                max-height: 20px;
                justify-content: center;
                align-items: center;
                background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.1) 0%,
                    rgba(255, 255, 255, 0) 50%,
                    rgba(0, 0, 0, 0.1) 100%
                );

                img {
                    max-width: 40px;
                    flex: 1;
                }
            }
        }
    }

    @media (max-width: 576px) {
        padding-top: 30px;

        .f-inner-wrapper {
            margin-bottom: 20px;
        }

        .f-red {
            padding: 35px 8px;

            p {
                font-size: 12px;
            }
        }

        .f-left,
        .f-middle,
        .f-right {
            align-items: center;
            padding: 10px 5px;
            border-bottom: 1px groove #fff;
        }

        .f-left {
            p {
                line-height: 24px;
            }
        }

        .f-right {
            P {
                line-height: 18px;
            }
        }
    }
`;

export default Footer;
