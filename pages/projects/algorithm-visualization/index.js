import React, {useState} from 'react'
import { algorithms } from '../../../data';
import Algorithms from '../../../components/Algorithms';
import Nav from '../../../components/Nav';
import NavCV from '../../../components/NavCV';

const Landing = () => {
    const [sortingChecked, setSortingChecked] = useState(true);
    const [algorithm, setAlgorithm] = useState("bubble sort")
    const [start, setStart] = useState(false);

    const handleSortClick = (algorithm) => {
        setAlgorithm(algorithm);
        setStart(true);
    }

    return(
        <main style={{height:'100vh'}}>
            <div className="algorithms">
                <Nav algorithm={sortingChecked?algorithms.sorting:algorithms.pathfinding} handleSortClick={handleSortClick}/>
                <Algorithms algorithm={algorithm} start={start} setStart={setStart}/>
            </div>
        </main>
    );
}

export default Landing;