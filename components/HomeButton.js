import { Weekend } from '@mui/icons-material';
import { Link } from '@mui/material';

export default function HomeButton() {
    return(
        <Link href="/" position="absolute" top="1.5rem" left="1.5rem" zIndex={1000}>
            <Weekend color="secondary" fontSize="large"></Weekend>
        </Link>
    )
}