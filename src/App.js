import * as React from 'react'
import { VertCarousel } from './components'
import { Box, Grid, Typography } from '@mui/material'

function App() {
  return (
    <Box sx={{ backgroundColor: 'aliceblue', height: window.innerHeight, justifyContent: 'center' }}>
      <Grid container>
        <Grid item xs={7}>
          <Typography variant={'h2'} sx={{ margin: 1}}>Main page content</Typography>
          <Typography variant={'body1'} sx={{ margin: 1}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Fermentum posuere urna nec tincidunt praesent semper feugiat. Consectetur a erat nam at lectus urna duis convallis convallis. Elementum eu facilisis sed odio morbi quis. Volutpat est velit egestas dui id ornare arcu odio ut. Sit amet aliquam id diam maecenas. Nisi est sit amet facilisis magna etiam tempor orci eu. Enim nulla aliquet porttitor lacus. At varius vel pharetra vel. Sit amet facilisis magna etiam tempor orci eu. A pellentesque sit amet porttitor eget dolor morbi non arcu.
          </Typography>
          <Typography variant={'body1'} sx={{ margin: 1}}>
            Dignissim convallis aenean et tortor at risus viverra adipiscing. Sit amet aliquam id diam maecenas. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Id volutpat lacus laoreet non curabitur gravida. Mauris ultrices eros in cursus turpis massa. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Eget lorem dolor sed viverra ipsum. Eget velit aliquet sagittis id consectetur purus ut faucibus. Accumsan lacus vel facilisis volutpat est velit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Neque ornare aenean euismod elementum nisi quis eleifend quam. Scelerisque purus semper eget duis at tellus at urna. Velit ut tortor pretium viverra.
          </Typography>
          <Typography variant={'body1'} sx={{ margin: 1}}>
            Ultrices in iaculis nunc sed augue lacus viverra. Urna et pharetra pharetra massa massa. Quis eleifend quam adipiscing vitae proin sagittis nisl. Urna condimentum mattis pellentesque id nibh tortor id. Pulvinar neque laoreet suspendisse interdum consectetur libero. Sit amet risus nullam eget. Eget dolor morbi non arcu. Vel pretium lectus quam id leo in vitae turpis massa. Auctor elit sed vulputate mi sit amet mauris commodo. In egestas erat imperdiet sed. Porta lorem mollis aliquam ut porttitor.
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ m: 1 }}>
            {/* <Typography variant={'h2'}>In the News</Typography> */}
            <VertCarousel autoScroll/>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
}

export default App;
