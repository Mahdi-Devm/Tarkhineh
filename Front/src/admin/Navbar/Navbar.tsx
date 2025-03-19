import { useState, useMemo, useCallback } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import { CiBellOn } from 'react-icons/ci'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import SearchIcon from '@mui/icons-material/Search'

import Avatar from '@mui/material/Avatar'
import AvatarImage from '../assets/images/avatar.png'
import EnIcon from '../assets/icons/england.avif'
import IrIcon from '../assets/icons/iran.png'

interface Language {
  code: string
  name: string
  icon: string
}

const languages: Language[] = [
  { code: 'en', name: 'English', icon: EnIcon },
  { code: 'fa', name: 'Persian', icon: IrIcon },
]

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0],
  )

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const handleLanguageChange = useCallback(
    (language: Language) => {
      setSelectedLanguage(language)
      handleClose()
    },
    [handleClose],
  )

  const selectedLanguageIcon = useMemo(
    () => (
      <img
        src={selectedLanguage.icon}
        alt="Language Icon"
        width={20}
        height={20}
      />
    ),
    [selectedLanguage],
  )

  return (
    <nav className="flex w-full items-center justify-between border-b-1 border-stone-300 bg-white px-4 py-3">
      <Paper
        component="form"
        sx={{
          p: '0px 8px',
          display: 'flex',
          alignItems: 'center',
          width: 250,
          background: '#f5f6fa',
          borderRadius: 30,
          border: '1px solid #e5e7eb',
          boxShadow: 0,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <div className="right-section flex items-center justify-center gap-x-4">
        <Badge
          color="secondary"
          variant="dot"
          overlap="circular"
          sx={{
            '& .MuiBadge-dot': {
              backgroundColor: '#47875C',
            },
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #47875C, #2E5944)',
              padding: '5px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              width: '35px',
              height: '35px',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.1)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <CiBellOn style={{ fontSize: '28px', color: '#fff' }} />
          </div>
        </Badge>

        <div className="hidden md:block">
          <Button
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleClick}
            startIcon={selectedLanguageIcon}
            sx={{ color: '#162556' }}
          >
            {selectedLanguage.name}
          </Button>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {languages.map((language) => (
              <MenuItem
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                sx={{ gap: 1 }}
              >
                <img
                  src={language.icon}
                  alt="Language Icon"
                  width={20}
                  height={20}
                />
                {language.name}
              </MenuItem>
            ))}
          </Menu>
        </div>

        <div className="avatar-wrapper flex items-center gap-1">
          <div className="admin-details hidden flex-col items-center justify-center md:flex">
            <Avatar alt="Remy Sharp" src={AvatarImage} />
            <span className="text-sm font-light">Moni Rou</span>
            <span className="text-sm font-light text-gray-400">Admin</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
