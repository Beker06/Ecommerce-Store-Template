"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

interface CurrencyProps {
    value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
    value = 0
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="font-semibold text-gray-900 dark:text-gray-200">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;