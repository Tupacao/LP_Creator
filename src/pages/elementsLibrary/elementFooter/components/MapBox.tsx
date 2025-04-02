import { Box } from '@mui/material';

export default function MapBox({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <Box>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.650213447616!2d-43.94244832593523!3d-19.939139638590916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c5303de113%3A0xd4ac5a0143894d1b!2sdti%20digital!5e0!3m2!1sen!2sbr!4v1743533216857!5m2!1sen!2sbr'
        width={width}
        height={height}
        style={{ border: 0 }}
        loading='lazy'
      ></iframe>
    </Box>
  );
}
