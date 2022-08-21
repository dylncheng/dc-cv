import { Grid, Link, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Add, Email, NightShelterRounded, Person, Work } from '@mui/icons-material';

const actions = [
    { icon: <Link href="/"><NightShelterRounded fontSize="small"/></Link>, name: 'Home' },
    { icon: <Link href="/about"><Person fontSize="small"/></Link>, name: 'About' },
    { icon: <Link href="/contact"><Email fontSize="small"/></Link>, name: 'Contact' },
    { icon: <Link href="/projects"><Work fontSize="small"/></Link>, name: 'Projects' },
  ];

export default function NavCV() {
    const theme = useTheme()

    return(
        <Grid container position="absolute" top={0} padding="1.5rem" width="100%">
            <Grid container item xs={12} flexDirection="row" justifyContent="space-around" sx={{ flexWrap:"no-wrap" }} maxWidth={{xs:'45%', sm:'35%', md:'25%'}} display={{xs:'none', sm:'flex'}}>
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
            <Grid container item>
                <Grid item display={{xs:'none', sm:'block'}}>
                    <Link href="/">
                        <NightShelterRounded sx={{position:"absolute", top:'1rem', width:'100%', height:'3rem'}} color="primary" fontSize="large"></NightShelterRounded>
                    </Link>
                </Grid>
                <Grid item display={{xs:'block', sm:'none'}}>
                    <SpeedDial
                    icon={<Add />}
                    direction="right"
                    ariaLabel="SpeedDial playground example"
                    style={{
                        position:"fixed",
                        left:"1rem",
                        top:"1rem"

                    }}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                        ))}

                    </SpeedDial>
                </Grid>

            </Grid>
        </Grid>
    );
}