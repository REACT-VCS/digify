import React from 'react';
import {twMerge} from "tailwind-merge";
import {clsx} from "clsx";

const cn = (...props) => {
    return (
       twMerge(clsx(props))
    );
};

export default cn;