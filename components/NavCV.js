import { Grid, Link, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { HomeMaxRounded, NightShelterRounded } from '@mui/icons-material';

export default function NavCV() {
    const theme = useTheme()

    return(
        <Grid container position="absolute" top={0} padding="1.5rem" width="100%">
            <Grid container item xs={7} flexDirection="row" justifyContent="space-around" style={{maxWidth:'25%'}}>
                <Grid item>
                    <Link href="/about"><Typography theme={theme}>About</Typography></Link>
                </Grid>
                <Grid item>
                    <Link href="/projects"><Typography theme={theme}>Projects</Typography></Link>
                </Grid>
                <Grid item>    
                    <Link href="/contact"><Typography theme={theme}>Contact</Typography></Link>
                </Grid>           
            </Grid>
            <Link href="/">
                <NightShelterRounded sx={{position:"absolute", right:0, left:0, width:'100%'}} color="primary" fontSize="large"></NightShelterRounded>
            </Link>
        </Grid>
    );
}