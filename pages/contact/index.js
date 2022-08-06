import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../../styles/Contact.module.css'
import HomeButton from "../../components/HomeButton";

const theme = createTheme({
    palette: {
      primary: {
        main:'#f4f3ee'
      },
      secondary: {
        main: '#bcb8b1'
      }
    },
    typography:  {
        h1: {
            fontSize: '10rem',
            fontWeight: '600',
            opacity: '0.7'
        }
    } 
  })

export default function Contact() {
    return(
        <ThemeProvider theme={theme}>
            <HomeButton></HomeButton>
            <Box  className={styles['contact']} width="100%" height="100%" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Typography variant="h1" color="primary">Links</Typography>
                <ul>
                    <li className="email"><Typography variant='h6' color='secondary'><a href={"mailto:chengdylan02@gmail.com"} target="_blank">email</a></Typography></li>
                    <li className="linkedin"><Typography variant='h6' color='secondary'><a href={"https://linkedin.com/in/dylnchng"} target="_blank">linkedin</a></Typography></li>
                    <li className="github"><Typography variant='h6' color='secondary'><a href={"https://github.com/dylncheng"} target="_blank">github</a></Typography></li>
                </ul>
            </Box>
        </ThemeProvider>

    );
}