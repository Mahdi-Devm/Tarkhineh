import { Button } from '@mui/material'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { GridRenderCellParams } from '@mui/x-data-grid'

type ActionButtonsProps = {
  handleDelete: (id: number) => void
  params: GridRenderCellParams<any>
}

function ActionButtons({ handleDelete, params }: ActionButtonsProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
      }}
    >
      <Button
        variant="contained"
        sx={{
          minWidth: 48,
          minHeight: 40,
          padding: '8px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E3F2FD',
          color: '#1565c0',
          boxShadow: 'none',
          transition: '0.2s',
          '&:hover': { backgroundColor: '#BBDEFB' },
        }}
        onClick={() => console.log('Edit:', params.row)}
      >
        <FaEdit size={18} />
      </Button>

      <Button
        variant="contained"
        sx={{
          minWidth: 48,
          minHeight: 40,
          padding: '8px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFEBEE',
          color: '#D32F2F',
          boxShadow: 'none',
          transition: '0.2s',
          '&:hover': { backgroundColor: '#FFCDD2' },
        }}
        onClick={() => handleDelete(Number(params.id))}
      >
        <FaTrash size={18} />
      </Button>
    </div>
  )
}

export default ActionButtons
