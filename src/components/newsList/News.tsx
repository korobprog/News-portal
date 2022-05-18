import * as React from 'react'
import { Grid, CircularProgress, Pagination, Stack } from '@mui/material'
import Card from '../NewsCard/Card'
import { Article } from '../../redux'

interface Props {
  news?: Article[]
  page: number
  setPage: (page: number) => void
}
const News: React.FC<Props> = ({ news, page, setPage }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  return (
    <Stack spacing={1}>
      <Grid container sx={{ width: '100%' }}>
        <Pagination count={3} onChange={handleChange} page={page} />
        {news ? (
          news.map((article) => <Card data={article} key={article.url} />)
        ) : (
          <CircularProgress color="secondary" />
        )}
      </Grid>
    </Stack>
  )
}

export default News
