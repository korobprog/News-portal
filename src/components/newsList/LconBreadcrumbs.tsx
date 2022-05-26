import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import GrainIcon from '@mui/icons-material/Grain'
import { Link } from 'react-router-dom'

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={`/`}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Новости
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Typography>
      </Breadcrumbs>
    </div>
  )
}
