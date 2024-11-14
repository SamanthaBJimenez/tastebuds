import { useState } from 'react';

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const reset = (customValue = initialValue) => {
        setValue("");
      };

    return { value, onChange: handleChange, reset }
}