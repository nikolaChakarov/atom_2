import { useEffect, useState } from "react";

const useForm = (props) => {
    const { init, validate, onSubmit } = props;

    const [values, setValues] = useState(init);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleBlur = (e) => {
        setTouched((prev) => ({
            ...prev,
            [e.target.name]: true,
        }));
    };

    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleValidate = (val) => {
        const validateErrors = validate(val);

        const isErrors = Boolean(Object.keys(validateErrors).length > 0);

        setErrors(validateErrors);

        return { isErrors, validateErrors };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { isErrors, validateErrors } = handleValidate(values);

        if (isErrors) {
            setTouched(validateErrors);
            setIsValid(false);
            return;
        }

        setIsSubmitting(true);

        onSubmit(values);
    };

    useEffect(() => {
        handleValidate(values);
    }, [touched, values]);

    return {
        values,
        errors,
        touched,
        isSubmitting,
        setIsSubmitting,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
