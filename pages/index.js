import { Typography, Box, Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Straight } from '@mui/icons-material';
import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

let intro = "Dylan Cheng";
let introArr = intro.split('')

let positionArr = [];
let hoverArr = {};

for(let i=0; i < introArr.length; i++) {
  let randY = Math.random() > 0.5?-1:1;
  let randX = Math.random() > 0.5?-1:1;
  positionArr.push([Math.random()*100*randY, Math.random()*100*randX]);
}

const ANIMATION_DURATION = 8;

const theme = createTheme({
  palette: {
    primary: {
      main:'#f4f3ee',
    },
  },
})


export default function Home() {
  const [titleHover, setTitleHover] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);

  const handleTitleHover = () => {
    setTitleHover(true);
  }

  useEffect(() => {
    if(window.sessionStorage.getItem('positionArr')) {
      positionArr = JSON.parse(window.sessionStorage.getItem('positionArr'));
    } else {
      window.sessionStorage.setItem('positionArr', JSON.stringify(positionArr));
    }

    if(JSON.parse(window.sessionStorage.getItem('titleHover'))) {
      setTitleHover(JSON.parse(window.sessionStorage.getItem('titleHover')));
      setAnimationTime(JSON.parse(window.sessionStorage.getItem('animationTime')));
    }
  }, [])

  useEffect(() => {
    let delay = null;
    if(titleHover && animationTime < ANIMATION_DURATION)
      delay = setTimeout(()=> {
        setAnimationTime((prevAnimationTime) => prevAnimationTime + 0.004)
      }, 4)
    else if(titleHover) {
      clearTimeout(delay);
    }
  }, [titleHover, animationTime])

  useEffect(() => {
    if (animationTime >= ANIMATION_DURATION) {
      window.sessionStorage.setItem('animationTime', JSON.stringify(animationTime))
    }
  }, [animationTime])

  useEffect(() => {
    window.sessionStorage.setItem('titleHover', JSON.stringify(titleHover));    
  }, [titleHover])

  return (
    <div className={styles.container}>
      <Head>
        <title>Dylan Cheng CV</title>
        <meta name="description" content="A portfolio website for Dylan Cheng" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box width='100%' height='100vh' display='flex' alignItems='center' justifyContent='center'>
          {
            introArr.map((char, index) => {
              return(
                <h1 
                key={index}
                className={titleHover?"char-rotate letter":'letter'}
                onMouseEnter={!titleHover?()=>handleTitleHover():null}
                onMouseLeave={() => hoverArr[index] = null}
                style={{
                  display:titleHover?'inline-block':'inline', 
                  height:titleHover?'fit-content':'auto', 
                  width:titleHover?'fit-content':'auto', 
                  position:titleHover?'relative':'static', 
                  top:titleHover?`${Math.log(1 + Math.log(1 + (animationTime/ANIMATION_DURATION)*20))*positionArr[index][0]*0.35}%`:'auto', 
                  left:titleHover?`${Math.log(1 + Math.log(1 + (animationTime/ANIMATION_DURATION)*20))*positionArr[index][1]*0.35}%`:'auto',  
                  transform: titleHover?`rotate(${360*Math.log(1 + animationTime/ANIMATION_DURATION + positionArr[index][0]*0.7)}deg)`:'initial',
                  opacity: `${0.85 - (animationTime/ANIMATION_DURATION)*0.8}`,
                  transformBox: 'fill-box'
                }}
              >
                {char}
              </h1>
              )
            })
          }
        </Box>
        {
          !titleHover && 
          <>
            <Straight className={styles['arrow']}></Straight>
            <Typography ><span className='grow desktop'>{"hover to start"}</span></Typography>
            <Typography ><span className='grow mobile'>{"tap to start"}</span></Typography>
          </>
        }
        <ThemeProvider theme={theme}>
          <Box position='absolute' top='75%' left='20%' display={((animationTime/ANIMATION_DURATION) < 0.15)?'none':'block'}>
            <Link href="/projects">
              <Button className={styles['home-link']} variant='outlined' color='primary'>
                  Projects
              </Button>
            </Link>
          </Box>
          <Box position='absolute' top='55%' right='20%' display={((animationTime/ANIMATION_DURATION) < 0.15)?'none':'block'}>
            <Link href="/contact">
              <Button className={styles['home-link']} variant='outlined' color='primary'>
                Contact
              </Button>
            </Link>
          </Box>
          <Box position='absolute' top='35%' left='30%' display={((animationTime/ANIMATION_DURATION) < 0.15)?'none':'block'}>
            <Link href="/about">
              <Button className={styles['home-link']} variant='outlined' color='primary'>
                About
              </Button>
            </Link>
          </Box>
          <Box position='absolute' top='15%' right='30%' display={((animationTime/ANIMATION_DURATION) < 0.15)?'none':'block'}>
            <Link href="/Dylan_Cheng_resume.pdf" download>
              <Button className={styles['home-link']} variant='outlined' color='primary'>
                Resume
              </Button>
            </Link>
          </Box>
        </ThemeProvider>
      </main>
    </div>
  )
}