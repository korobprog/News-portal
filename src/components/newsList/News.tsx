import * as React from 'react'
import { Grid, CircularProgress, Pagination, Stack } from '@mui/material'
import Card from '../NewsCard/Card'
import { Article } from '../../redux'
import { Link } from 'react-router-dom'

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
    <Stack maxWidth="sm" spacing={1}>
      <Grid container sx={{ width: '100%' }}>
        <Pagination count={3} onChange={handleChange} page={page} />
        {news ? (
          news.map((article) => (
            <Link
              style={{ paddingLeft: 13, textDecoration: 'none' }}
              to={`/detailednews/${encodeURIComponent(article.title)}`}
            >
              <Card data={article} key={article.url} />
            </Link>
          ))
        ) : (
          <CircularProgress color="secondary" />
        )}
      </Grid>
    </Stack>
  )
}

export default News
