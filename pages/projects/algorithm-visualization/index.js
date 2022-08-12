import React, {useEffect, useState} from 'react'
import { algorithms } from '../../../data';
import Algorithms from '../../../components/Algorithms';
import Nav from '../../../components/Nav';
import HomeButton from '../../../components/HomeButton';

const Landing = () => {
    const [sortingChecked, setSortingChecked] = useState(true);
    const [sortingOpacity, setSortingOpacity] = useState(1);
    const [pathfindingOpacity, setPathfindingOpacity] = useState(1);
    const [algorithm, setAlgorithm] = useState("bubble sort")
    const [start, setStart] = useState(false);

    const sortingHandler = () => {
        setSortingOpacity(0.8);
        setPathfindingOpacity(1);
        setSortingChecked(true);
    };

    const pathfindingHandler = () => {
        setPathfindingOpacity(0.8);
        setSortingOpacity(1);
        setSortingChecked(false);
    };

    const handleSortClick = (algorithm) => {
        setAlgorithm(algorithm);
        setStart(true);
    }

    // if()

    // useEffect(() => {
        
    // }, []);


    return(
        <main style={{height:'100vh'}}>
            <HomeButton></HomeButton>
            <div className="algorithms">
                <Nav algorithm={sortingChecked?algorithms.sorting:algorithms.pathfinding} handleSortClick={handleSortClick}/>
                <Algorithms algorithm={algorithm} start={start} setStart={setStart}/>
            </div>
        </main>
    );
}

export default Landing;

{/* <div className="description">
    <ul className="radio">
        <li><a href="#" onClick={sortingHandler} style={{opacity: `${sortingOpacity}`}}>sorting</a></li>
        <li><a href="#" onClick={pathfindingHandler} style={{opacity: `${pathfindingOpacity}`}}>pathfinding</a></li>
    </ul>
</div> */}