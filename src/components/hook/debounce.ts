import {useEffect, useState} from 'react'
import {debounce} from "@mui/material";

export function useDebounce<T>(value: T, delay = 250) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value)
            }, delay);
            return () => {
                clearTimeout(handler);
            }
        },
        [value, delay]
    )
    return debouncedValue
}
