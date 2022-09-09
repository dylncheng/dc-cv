import { Grid, Link, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Add, Email, NightShelterRounded, Person, Remove, Work } from '@mui/icons-material';
import { useState } from "react";

const actions = [
    { icon: <Link href="/"><NightShelterRounded color="secondary" fontSize="small"/></Link>, name: 'Home' },
    { icon: <Link href="/about"><Person color="secondary" fontSize="small"/></Link>, name: 'About' },
    { icon: <Link href="/contact"><Email color="secondary" fontSize="small"/></Link>, name: 'Contact' },
    { icon: <Link href="/projects"><Work color="secondary" fontSize="small"/></Link>, name: 'Projects' },
  ];

export default function NavCV() {
    const [navOpen, setNavOpen] = useState(false)
    const theme = useTheme()

    return(
        <Grid container className="nav-cv" backgroundColor={{sm:"rgb(70,63,58,0.6)"}}>
            <Grid container item xs={12} flexDirection="row" justifyContent="space-around" sx={{ flexWrap:"no-wrap" }} maxWidth={{xs:'45%', sm:'35%', md:'25%'}} display={{xs:'none', sm:'flex'}} zIndex={2}>
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
                        <NightShelterRounded sx={{position:"absolute", top:'1rem', width:'100%', height:'3rem', zIndex:1}} color="primary" fontSize="large"></NightShelterRounded>
                    </Link>
                </Grid>
                <Grid item display={{xs:'block', sm:'none'}}>
                    <SpeedDial
                    icon={navOpen?<Remove />:<Add />}
                    direction="down"
                    ariaLabel="SpeedDial playground example"
                    onOpen={() => setNavOpen(true)}
                    onClose={() => setNavOpen(false)}
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