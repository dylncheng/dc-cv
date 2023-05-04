import { Typography, Box, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fontFamily, fontWeight } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import me from "../../public/me.JPG"
import HomeButton from "../../components/HomeButton";
import NavCV from "../../components/NavCV";
import styles from "../../styles/About.module.css"

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
    fontWeight: '600',
    fontFamily: 'Bogart',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3.2rem',
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '4.5rem',
      textAlign: 'left'

    },
    [theme.breakpoints.up('md')]: {
      fontSize: '7rem',
      textAlign: 'left'
    },

  };

  theme.typography.h6 = {
    fontFamily: 'Bogart',
    fontWeight: 300,
    fontSize: '1.5rem',
  }

  theme.typography.strong = {
    color: '#f4f3ee',
    fontWeight: 700,
    fontFamily: 'Bogart'
  }

const aboutObj = {
  aboutThisWebsite: "This current website was built with Next.js using React and Material UI.\n " +
  "The design concept was minimalism-focused like most of my projects, but was centered around this one animation I had in mind before fallng asleep one time.\n" +
  "I'm not a beginner in React animations, but most of my projects included linear, or predictical movements of elements in two degrees of freedom.\n" + 
  "My basic idea was that I was going to have some text that explodes in different directions on hover/press. \n" + 
  "As terrible and traumatizing as it was, the first thing I thought of to achieve this design was linear algebra. \n" + 
  "As for the effect of exploding letters, at the time I didn't expect to be writing a log-log function to model the behaviour I wanted. \n" +
  "Nevertheless, my effort in building a pure React animation hopefully paid off. Some extra things I didn't write about: (pseudo-random position generation & animation timing)\n",
  aboutMe: "I'm a programmer with experice in multi-threaded and distributed system development." +
  "I enjoy spending time constantly improving on my programming skills, and playing music in my spare time."

}

export default function About() {

    return(
        <ThemeProvider theme={theme}>
            <Head>
              <title>About</title>
              <meta name="description" content="About page for Dylan Cheng CV" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
              <NavCV></NavCV>
              <Box maxWidth="80%" height="100%" sx={{mt:"3%"}}>
                <Grid container rowSpacing={5} justifyContent="center">
                  <Grid container item xs={12} justifyContent='center'>
                    <Grid container item lg={4} sm={6} xs={12} flexDirection='column' justifyContent={{ xs:'center' }}>
                      <Grid item className={styles['title']}>
                        <Typography variant='h1' color="primary" maxHeight="fit-content">About me</Typography>
                      </Grid>
                      <Grid item className={styles['subtitle']}>
                        <Typography variant='h6' color="secondary" marginBottom="2.5rem" textAlign={{xs:'center', sm:'left'}}> Hi, I&apos;m <Typography variant="strong">Dylan</Typography>—a <Typography variant="strong">Computer Engineering</Typography> student at the <Typography variant="strong">University of Toronto</Typography></Typography>
                      </Grid>
                    </Grid>
                    <Grid item className={styles['photo']} xl={3} lg={4} sm={6} xs={12} textAlign="right" padding={{sm:'10px'}}>
                      <Image src={me} layout="intrinsic" height="532" width="400" style={{borderRadius: '10px'}}></Image>
                    </Grid>
                  </Grid>
                  <Grid container item xl={7} lg={8} sm={12} xs={12} justifyContent="center">
                    <Grid item className={styles['description']}>
                      {/* <Typography textAlign="center">{aboutObj.aboutThisWebsite}</Typography> */}
                      <Typography textAlign={{ xs:'center', sm:'left'}} color="secondary" fontSize="1.2rem" lineHeight="2.3rem">{aboutObj.aboutMe}</Typography>
                    </Grid>

                  </Grid>
                </Grid>
              </Box>
            </main>
        </ThemeProvider>
    )
}