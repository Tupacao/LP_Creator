import { Box } from "@mui/material";

export default function ImageBox({ width, height }: { width: number; height: number }) {
  return (
    <Box>
      <img
        src='https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg'
        alt='Placeholder'
        width={width}
        height={height}
      />
    </Box>
  );
}
