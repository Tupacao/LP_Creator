import { TextField, Typography } from '@mui/material';
import { useState } from 'react';

interface TitleTextProps {
  titleText: string;
  // setTitle: (value: string) => void;
}

export default function TitleText({ titleText }: TitleTextProps) {

  return (
    <Typography
      variant='h5'
      fontFamily={'Poppins, sans-serif'}
      fontWeight={'bold'}
    >
      {titleText}
    </Typography>
    // <TextField
    //   value={titleText}
    //   onChange={(e) => setTitle(e.target.value)}
    //   placeholder='Entre em Contato'
    //   variant='standard'
    //   multiline
    //   sx={{
    //     backgroundColor: 'transparent',
    //     whiteSpace: 'pre-wrap',
    //     wordWrap: 'break-word',
    //     overflowWrap: 'break-word',
    //   }}
    //   slotProps={{
    //     input: {
    //       disableUnderline: true,
    //       style: {
    //         width: '800px',
    //         textAlignLast: 'center',
    //         margin: '0 auto',
    //         fontSize: '1.5rem',
    //         fontWeight: 'bold',
    //         color: 'inherit',
    //       },
    //     },
    //   }}
    // />
  );
}
