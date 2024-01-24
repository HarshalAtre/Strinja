import * as React from 'react';
import Input from '@mui/joy/Input';

export default function FocusOutlineInput({title,setTitle}) {
  const handleChange = (evt) =>{
    setTitle(evt.target.value)
    // console.log('value is:', evt.target.value);
  }
  return (
    <Input
    value = {title}
    onChange={handleChange}
      placeholder="Type title in here…"
      sx={{
        '&::before': {
          display: 'none',
        },
        '&:focus-within': {
          outline: '2px solid var(--Input-focusedHighlight)',
          outlineOffset: '2px',
        },
      }}
    />
  );
}
