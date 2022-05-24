import { Container, Divider, Link } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useLocation } from 'react-router-dom'
import { useNewsApiQuery } from '../../../redux'
import LconBreadcrumbs from '../LconBreadcrumbs'

interface useLocation {
  pathname: string
}

const NewsDetailed = () => {
  const location = useLocation()
  const title = location.pathname.split('/')[2]
  const id = decodeURIComponent(title)
  const { data } = useNewsApiQuery({
    q: id,
  })
  const news = data?.[0]

  console.log(data, 'ДАТА')
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          mt: '1rem',
          p: 1,
        }}
      >
        <LconBreadcrumbs />
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="auto"
            width="auto"
            image={news?.urlToImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {news?.title}
            </Typography>
            <Typography gutterBottom  component="div">
              {news?.description}
            </Typography>
            <Divider />
            <Typography variant="body2" color="text.secondary">
                  <Link href={news?.url}>Источник:{news?.source.name}</Link>
                </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default NewsDetailed
