import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Divider,
  Link,
  Container,
  Grid,
  Stack,
} from '@mui/material'
import format from 'date-fns/format';
import ru from "date-fns/locale/ru";

const ActionAreaCard = ({ data }) => {
  const timeNews = format(new Date(data.publishedAt), `PPPPp` , {locale: ru})
  return (
    <Stack spacing={1}>
      <Container
        sx={{
          mt: '1rem',
          p: 1,
        }}
        // sx={{ width: 1 / 1 }}
      >
        <Grid 
        item xs={12}
        
        >
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                width="auto"
                image={data.urlToImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="overline" component="div">
                {timeNews}
                  <Divider />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Container>
    </Stack>
  )
}

export default ActionAreaCard
