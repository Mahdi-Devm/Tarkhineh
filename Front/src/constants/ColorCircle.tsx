import { Box } from '@mui/material'

type ColorCircleProps = {
  colors: string[]
}

const ColorCircle = ({ colors }: ColorCircleProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        paddingTop: '10px',
        height: '100%',
      }}
    >
      {colors.map((color: string, index: number) => (
        <Box
          key={index}
          sx={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: color,
          }}
        />
      ))}
    </Box>
  )
}

export default ColorCircle
