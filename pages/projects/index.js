import Image from "next/image";
import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { data } from "../../data";
import styles from "../../styles/Projects.module.css"
import HomeButton from "../../components/HomeButton";
import NavCV from "../../components/NavCV";
import { fontSize } from "@mui/system";

const theme = createTheme({
    palette: {
      primary: {
        main:'#f4f3ee'
      },
      secondary: {
        main: '#bcb8b1'
      }
    },
  })
  
  theme.typography.h1 = {
    fontWeight: '900',
    opacity: '0.7',
    fontFamily:'Bogart',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3.4rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '7rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '10rem',
    },
  
  };

  theme.typography.h3 = {
    fontFamily: 'Bogart',
    fontWeight: 300,
    fontSize: '1.5rem'
  }

export default function Projects() {
    return(
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Projects page for Dylan Cheng CV" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <NavCV></NavCV>
                <main className={styles['main']}>
                    <Typography variant="h1" color="primary" mt="5%"> Projects</Typography>           
                    <Grid 
                        container
                        rowSpacing={11}
                        sx={{
                            width:"90%" ,
                            display: "flex",
                            flexDirection: "column",
                            alignItems:"center",
                            justifyContent: "space-between"
                        }}
                    >
                        {
                            data.projects.map((project, index) => {
                                return(
                                    <Grid key={index} container item xs={12} justifyContent="center">
                                        <Grid item xl={9} lg={10} md={11} sm={12}>
                                            <Card 
                                                sx={{
                                                    // width:"55vw", 
                                                    height:"100%",
                                                    // width:'100%',
                                                    // marginBottom:'10vh',
                                                    // background: "linear-gradient(338.83deg,#f2e9e4 -3.41%,#ccb7ae,#f2e9e4 52.31%)",
                                                    background: "#58524d",
                                                    raised: false,
                                                    borderRadius: '10px'
                                                }} 
                                                // raised={true}
                                            >
                                                <CardHeader 
                                                    title={project.name} 
                                                    titleTypographyProps=
                                                    {{
                                                        variant:"h3",
                                                        color:"secondary",
                                                        textAlign:'right'

                                                    }}
                                                >
                                                </CardHeader>
                                                <CardContent>
                                                    <Box display="flex" flexDirection='column' alignItems="center">
                                                        <Grid container maxWidth="90%">
                                                            <Grid container item xs={12} justifyContent={{md:"space-around"}} rowSpacing={{sm:4, md:0}}>
                                                                <Grid item md={7} sm={12}>
                                                                    <a href={project.link?project.link:project.github} target="_blank" rel="noreferrer">
                                                                        <Image 
                                                                            src={project.image} 
                                                                            placeholder="blur"
                                                                            loading="lazy"
                                                                            objectFit="cover"
                                                                        >
                                                                        </Image>
                                                                    </a>
                                                                </Grid>
                                                                <Grid item md={4} sm={12}>
                                                                    <Typography color="secondary">{project.description}</Typography>
                                                                </Grid>

                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </main>
            </ThemeProvider>
        </>
    )
}