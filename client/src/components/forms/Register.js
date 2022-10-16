import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/GlobalState";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Stack,
    Box,
    Typography,
    TextField,
    Button,
    OutlinedInput,
    InputAdornment,
    IconButton,
    InputLabel,
    FormControl,
    FormHelperText,
} from "@mui/material";
import styled from "styled-components";
import useForm from "./useForm";
import Error from "../error/Error";

const Register = () => {
    const { register, user, error, dispatch } = useContext(GlobalContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState({});

    const init = {
        username: "",
        email: "",
        password: "",
        password2: "",
        gender: "",
        country: "",
        subscribe: "",
    };

    const handleClickShowPassword = (inputEl) => {
        setShowPassword((prev) => ({
            [inputEl]: !prev[inputEl],
        }));
    };

    const validate = (values) => {
        const errors = {};
        const emailReg = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/);

        if (values.username === "") {
            errors.username = "Username is required";
        }

        if (values.email === "") {
            errors.email = "Email is required";
        } else if (!emailReg.test(values.email)) {
            errors.email = "Wrong email format";
        }

        if (values.password === "") {
            errors.password = "Password is required";
        }

        if (values.password !== values.password2) {
            errors.password2 = "Password don't match";
        }

        return errors;
    };

    const onSubmit = (values) => {
        register(values);

        setTimeout(() => {
            setIsSubmitting(false);
        }, 500);
    };

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch({
                    type: "CLEAR_ERROR",
                });
            }, 3000);
        }

        if (user) {
            navigate("/");
        }
    }, [user, error]);

    const {
        values,
        errors,
        touched,
        isSubmitting,
        setIsSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useForm({ init, validate, onSubmit });

    return (
        <RegisterContainer>
            <Box className="rc-image-wrapper">
                <img className="r-img-bg" src="/assets/bg.jpg" alt="img_bg" />
            </Box>

            <Stack className="rc-inner-wrapper">
                <form className="rc-form-base" onSubmit={handleSubmit}>
                    <Typography variant="h2">Register</Typography>
                    {error && <Error message={error} />}
                    <TextField
                        size="small"
                        label="User name"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                            touched.username &&
                            errors.username &&
                            errors.username
                        }
                    />

                    <TextField
                        size="small"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                            touched.email && errors.email && errors.email
                        }
                    />

                    <FormControl size="small">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword.password ? "text" : "password"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Password"
                            autoComplete="password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() =>
                                            handleClickShowPassword("password")
                                        }
                                        edge="end"
                                    >
                                        {showPassword.password ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {touched.password && errors.password && (
                            <FormHelperText>{errors.password}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl size="small">
                        <InputLabel htmlFor="password2">
                            Repeat password
                        </InputLabel>
                        <OutlinedInput
                            id="password2"
                            type={showPassword.password2 ? "text" : "password"}
                            name="password2"
                            value={values.password2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Repeat password"
                            autoComplete="password2"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() =>
                                            handleClickShowPassword("password2")
                                        }
                                        edge="end"
                                    >
                                        {showPassword.password2 ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {touched.password2 && errors.password2 && (
                            <FormHelperText>{errors.password2}</FormHelperText>
                        )}
                    </FormControl>

                    <Box>
                        <Button
                            disabled={isSubmitting}
                            variant="contained"
                            type="submit"
                        >
                            Register
                        </Button>
                    </Box>
                </form>
            </Stack>
        </RegisterContainer>
    );
};

const RegisterContainer = styled(Box)`
    height: 100%;
    position: relative;

    .rc-image-wrapper {
        display: none;
    }

    .rc-inner-wrapper {
        max-width: var(--max-width);
        margin: 0 auto;
        height: 100%;

        .rc-form-base {
            min-width: 350px;
            margin: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 15px;
            border: 1px solid var(--theme-blue);
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            background: #fff;
        }

        h2 {
            font-size: 26px;
            font-weight: 600;
            color: var(--theme-blue);
            margin-bottom: 8px;
        }
    }

    & label.Mui-focused {
        color: #777;
    }

    & .MuiOutlinedInput-root {
        & fieldset {
            border-color: #777;
        }
        &:hover fieldset {
            border-color: #333;
        }
        &.Mui-focused fieldset {
            border-color: var(--theme-blue);
        }
    }

    .MuiFormHelperText-root {
        color: var(--theme-red);
    }

    @media (max-width: 375px) {
        .rc-inner-wrapper {
            .rc-form-base {
                box-sizing: border-box;
                gap: 20px;
            }
        }

        .rc-image-wrapper {
            display: block;
            z-index: -1;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;

export default Register;
