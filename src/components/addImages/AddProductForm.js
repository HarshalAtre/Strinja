import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ImagePicker } from 'react-file-picker'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload({setImage}) {
  return (
    <>
    
    <ImagePicker
    extensions={['jpg', 'jpeg', 'png']}
    dims={{minWidth: 100, maxWidth: 1080, minHeight: 100, maxHeight: 1920}}
    onChange={base64 =>(
      // console.log(base64)
      setImage(base64)
      )}
    onError={errMsg => console.log(errMsg)}
  >
    <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
      Upload file
    </Button>
  </ImagePicker>
  </>
  );
}
