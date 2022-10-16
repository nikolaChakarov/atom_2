import { useState, useEffect } from "react";

const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWidtChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWidtChange);

        return () => window.removeEventListener("resize", handleWidtChange);
    }, [width]);

    return width;
};

export default useWidth;
