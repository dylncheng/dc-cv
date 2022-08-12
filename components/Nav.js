import React from 'react'

const Nav = (props) => {
    return(
        <div className="nav">
            <ul>
                {props.algorithm.map((algorithm, index) => {
                    return(
                     <li key={index}><a href="#" onClick={() => props.handleSortClick(algorithm)}>{algorithm}</a></li>
                    );
                })}
                {/* <li><a href="#">buble</a></li>
                <li><a href="#">quick</a></li>
                <li><a href="#">insertion</a></li> */}
            </ul>
        </div>
    );
};

export default Nav;