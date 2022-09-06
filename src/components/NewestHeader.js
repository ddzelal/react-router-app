import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NewestHeader() {
  return (
        <div>
        <Button>

            <Link to='/'>AboutUs</Link>
        </Button>
        <Button>

            <Link to='TeamBuild'>TeamBuild</Link>
        </Button>
        </div>
  )
}
