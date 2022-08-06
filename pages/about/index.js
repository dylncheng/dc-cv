import { Typography, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

export default function About() {

    return(
        <ThemeProvider theme={theme}>
            <HomeButton></HomeButton>
            <Box width="100%" height="100%" minHeight="100vH" display="flex" justifyContent="center" alignItems="center">
                <div>
                    <Typography variant='h1' color="primary" maxHeight="fit-content" marginBottom="5rem">About me</Typography>
                    <Typography variant='h6' color="primary" marginBottom="2.5rem"> Hi, I'm <strong>Dylan</strong>—a <strong>Computer Engineering</strong> student at the <strong>University of Toronto</strong></Typography>
                    <Typography variant='h6' color="primary">testestesttest</Typography>
                </div>
            </Box>
        </ThemeProvider>
    )
}