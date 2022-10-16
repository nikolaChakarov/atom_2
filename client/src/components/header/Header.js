import React from "react";
import useWidth from "../../hooks/useWidth";

import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
    const layoutWidth = useWidth();

    return (
        <React.Fragment>
            {layoutWidth > 576 ? (
                <>
                    <HeaderTop />
                    <HeaderBottom />
                </>
            ) : (
                <HeaderMobile />
            )}
        </React.Fragment>
    );
};

export default Header;
