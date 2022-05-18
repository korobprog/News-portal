import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, Divider, Link } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

const ActionAreaCard = ({ data }) => {

  return (
    <Stack spacing={1}>
      <Container
        sx={{
          mt: '1rem',
          p: 1,
        }}
        // sx={{ width: 1 / 1 }}
      >
        <Grid item xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image={data.urlToImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="overline" component="div">
                  {data.publishedAt}
                  <Divider />
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {data.description}
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href={data.url}>Источник:{data.source.name}</Link>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Container>
    </Stack>
  )
}

export default ActionAreaCard;
