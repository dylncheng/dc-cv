import BedIcon from '@mui/icons-material/Bed';
import { Link } from '@mui/material';

export default function HomeButton() {
    return(
        <Link href="/" position="absolute" top="1.5rem" left="1.5rem">
            <BedIcon color="secondary" fontSize="large"></BedIcon>
        </Link>
    )
}