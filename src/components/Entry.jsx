import PlaceIcon from '@mui/icons-material/Place';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            sm: 500,
        }
    },
    typography: {
        fontFamily: 'Inter',
        h5: { 
            fontWeight: 700,
            fontSize: '1.56rem',
            paddingBottom: '0.5em',
        },
        subtitle1: { 
            fontSize: '0.68rem',
            letterSpacing: '0.15em',
        },
        subtitle2: { 
            fontSize: '0.8rem',
            fontWeight: '700',
            paddingBottom: '0.5em',
        },
        body2: { 
            fontSize: '0.8rem',
            lineHeight: '150%',
        },
        link: {
            fontSize: '0.8rem',
        },
      },
    palette: {
        primary: {
            mode: 'light',
            main: 'rgba(245, 90, 90, 1)',
        }
    }
});

function Entry(props) {
    return (
        <ThemeProvider theme={theme}>
            <Grid size={12}  sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ 
                maxWidth: 600, 
                boxShadow: 'none',
                [theme.breakpoints.down('sm')]: {
                    boxShadow: '0 0.1rem 0.1rem 0 rgba(216, 216, 216, 0.52)'
                }         
                }}> 
                <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    paddingX: 5,
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: 'column',
                        textAlign: 'center',
                        paddingX: 1,
                    }
                    }}>
                    <Box marginRight={1} className='card-img-wrapper'>
                        <CardMedia className='card-img'
                            component="img"
                            image={props.img.src}
                            alt={props.img.alt}
                        />
                    </Box>
                    <CardContent>
                        <Box sx={{ 
                                display: 'flex',
                                alignItems: 'center',
                                [theme.breakpoints.down('sm')]: {
                                    flexDirection: 'column'
                                }
                                }}>
                            <Box marginRight={2} sx={{ 
                                display: 'flex',
                                alignItems: 'center'
                                }}>
                                <SvgIcon component={PlaceIcon} color='primary' sx={{width: 14}}></SvgIcon>
                                <Typography variant='subtitle1' component='h6' 
                                    sx={{ textTransform: 'uppercase'}}>
                                    {props.country}
                                </Typography>
                            </Box>
                            <Link variant='link' color='textDisabled' href={props.googleMapsLink} target='_blank' rel="noopener">View on Google Maps</Link>                            
                        </Box>
                        <Typography variant='h5' component='h2'>{props.title}</Typography>
                        <Typography variant='subtitle2' component='p'>{props.dates}</Typography>                       
                        <Typography variant='body2' component='p' sx={{
                            [theme.breakpoints.down('sm')]: {
                                textAlign: 'justify'
                            }
                        }}>{props.text}</Typography>
                    </CardContent>
                </Box>      
            </Card>
        </Grid>
        </ThemeProvider> 
    )
}

export default Entry