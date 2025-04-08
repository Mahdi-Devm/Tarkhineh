import PropTypes from 'prop-types'
import { Box } from '@mui/material'

const ColorCircle = ({ colors }) => {
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
      {colors.map((color, index) => (
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

ColorCircle.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ColorCircle
