import { Typography, Box, Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ArrowDropUp, ArrowUpward, Straight } from '@mui/icons-material';
import Head from 'next/head'
import Image from 'next/image'
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
      main:'#f4f3ee'
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
      console.log("animation done!")
    }

    window.sessionStorage.setItem('titleHover', JSON.stringify(titleHover));
    window.sessionStorage.setItem('animationTime', JSON.stringify(animationTime))
    
  }, [titleHover, animationTime])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
                  margin:0,
                  position:titleHover?'relative':'static', 
                  top:titleHover?`${Math.log(1 + Math.log(1 + (animationTime/ANIMATION_DURATION)*20))*positionArr[index][0]*0.35}%`:'auto', 
                  left:titleHover?`${Math.log(1 + Math.log(1 + (animationTime/ANIMATION_DURATION)*20))*positionArr[index][1]*0.35}%`:'auto',  
                  transformBox: 'fill-box',
                  transform: titleHover?`rotate(${360*Math.log(1 + animationTime/ANIMATION_DURATION + positionArr[index][0]*0.7)}deg)`:'initial',
                  opacity: `${0.85 - (animationTime/ANIMATION_DURATION)*0.8}`,
                  color: '#f4f3ee',
                  fontFamily: 'Bogart',
                  fontWeight: 900
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
            <Straight sx={{position:"absolute", top:"54.5vh", color:"#f4f3ee"}}></Straight>
            <Typography ><span className='grow desktop'>{"hover to start"}</span></Typography>
            <Typography ><span className='grow mobile'>{"tap to start"}</span></Typography>
          </>
        }
        <ThemeProvider theme={theme}>
          <Box position='absolute' top='65%' left='20%' display={((animationTime/ANIMATION_DURATION) < 0.15)?'none':'block'}>
            <Button className={styles['home-link']} variant='outlined' color='primary'>
              <Link href="/projects">
                  Projects
              </Link>
            </Button>
          </Box>
          <Box position='absolute' top='45%' right='20%' display={((animationTime/ANIMATION_DURATION) < 0.15)?'none':'block'}>
            <Button className={styles['home-link']} variant='outlined' color='primary'>
              <Link href="/contact">
                Contact
              </Link>
            </Button>
          </Box>
          <Box position='absolute' top='25%' left='30%' display={((animationTime/ANIMATION_DURATION) < 0.15)?'none':'block'}>
            <Button className={styles['home-link']} variant='outlined' color='primary'>
              <Link href="/about">
                About
              </Link>
            </Button>
          </Box>
        </ThemeProvider>
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}

// top={titleHover?`${Math.random()*100}%`:'auto'} left={titleHover?`${Math.random()*100}%`:'auto'}
{/* <h1 
  key={index}
  style={{
    display:'inline', 
    height:titleHover?'fit-content':'auto', 
    position:titleHover?'relative':'static', 
    top:titleHover?`${Math.log(1 + Math.log(1 + (animationTime/ANIMATION_DURATION)*20))*positionArr[index][0]*0.2}%`:'auto', 
    left:titleHover?`${Math.log(1 + Math.log(1 + (animationTime/ANIMATION_DURATION)*20))*positionArr[index][0]*0.2}%`:'auto',  
  }}
>
  {char}
</h1> */}

{/* <Typography 
  key={index} 
  display='inline' 
  variant='h1' 
  height={titleHover?'fit-content':'auto'} 
  position={titleHover?'relative':'static'} 
  top={titleHover?`${Math.log(1 + Math.log(1 + (animationTime/ANIMATION_DURATION)*20))*positionArr[index][0]*0.2}%`:'auto'} 
  left={titleHover?`${Math.log(1 + Math.log(1 + (animationTime/ANIMATION_DURATION)*20))*positionArr[index][0]*0.2}%`:'auto'}                  
>
    {char}
</Typography> */}

// height={titleHover?'100%':'fit-content'} display={titleHover?'flex':'block'} alignItems='center' justifyContent='center'