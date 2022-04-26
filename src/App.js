import React, { useState } from 'react'
import { Card, CardContent, Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import bsv from 'bsv'
import { toast } from 'react-toastify'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const useStyles = makeStyles(theme => ({
  content_wrap: {
    margin: 'auto',
    padding: theme.spacing(3),
    boxSizing: 'border-box',
    maxWidth: '1440px',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1)
    }
  },
  logo: {
    width: '80%',
    marginTop: theme.spacing(8)
  },
  fields: {
    marginTop: theme.spacing(7),
    display: 'grid',
    gridGap: theme.spacing(5)
  },
  id: {
    fontFamily: 'monospace',
    userSelect: 'all',
    letterSpacing: theme.spacing(1)
  }
}), { name: 'BRFC' })

const App = () => {
  const [title, setTitle] = useState('My Specification')
  const [authors, setAuthors] = useState(
    'John Galt <j.galt@atlantis.society>, _unwriter'
  )
  const [version, setVersion] = useState('1')
  const [id, setId] = useState('2a542c9d8980')
  const classes = useStyles()

  const makeHandleChange = field => e => {
    let preimage
    if (field === 'version') {
      setVersion(e.target.value)
      preimage = title +
        (authors || '').trim() +
        (e.target.value || '').trim()
    } else if (field === 'title') {
      setTitle(e.target.value)
      preimage = e.target.value.trim() +
        (authors || '').trim() +
        (version || '').trim()
    } else if (field === 'authors') {
      setAuthors(e.target.value)
      preimage = title +
        (e.target.value || '').trim() +
        (version || '').trim()
    }
    console.log(preimage)
    const hash = bsv.crypto.Hash.sha256sha256(Buffer.from(preimage, 'utf8'))
    setId(hash.reverse().slice(0, 6).toString('hex'))
  }

  return (
    <div className={classes.content_wrap}>
      <center>
        <img
          className={classes.logo}
          src='/logo.png'
          alt='Babbage Logo'
          title='Babbage Logo'
        />
      </center>
      <Typography variant='h3' align='center'>
        <b>BRFC ID Calculator</b>
      </Typography>
      <div className={classes.fields}>
        <TextField
          value={title}
          onChange={makeHandleChange('title')}
          label='Specification Title'
        />
        <TextField
          value={authors}
          onChange={makeHandleChange('authors')}
          label='Specification Authors'
        />
        <TextField
          value={version}
          onChange={makeHandleChange('version')}
          label='Version'
        />
        <Card elevation={5}>
          <CardContent className={classes.id_display}>
            <CopyToClipboard
              text={id}
              onCopy={() => {
                toast.success('BRFC ID copied!')
              }}
            >
              <Typography
                variant='h3'
                align='center'
                color='primary'
                className={classes.id}
              >
                <b>{id}</b>
              </Typography>
            </CopyToClipboard>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
