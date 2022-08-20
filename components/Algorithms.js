import React, {useEffect, useState, useCallback, useMemo} from 'react'

const Algorithms = ({algorithm, start, setStart}) => {
    const [index, setIndex] = useState(0);
    const [isDone, setIsDone] = useState(false);
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }

    const randomizeArray = useCallback(() => {
        let elements = 100;

        let arr = [];

        for(let i = 0; i < elements; i++) {
            // arr[i] = i + 1;
            arr[i] = {val:i+1, color:"#282c34", sorted:false};
        }

        for(let i = 0; i < elements; i++) {
            shuffle(arr);
        }
        return arr;
    }, [])


    // let nArr = useMemo(() => randomizeArray(),[randomizeArray]);
    const [nArr, setNArr] = useState(() => randomizeArray())


    const handleReset = () => {
        setIndex(0);
        setIsDone(false);
        setStart(false);
        setNArr(() => randomizeArray());
    }
    
    const bubbleSort = useCallback(
        () => {
            if(index + 1 === nArr.length || nArr[index].sorted === true)
                return;

            if((nArr[index]).val > (nArr[index + 1]).val) {
                // swap(nArr[index], nArr[index + 1]);
                let temp = nArr[index];
                nArr[index] = nArr[index + 1];
                nArr[index + 1] = temp;

            }


        },
        [index, nArr],
    )


    const insertionSort = useCallback(
        () => {
            let min = index;
            for(let j = index + 1; j < nArr.length; j++) {
                if(nArr[j].val < nArr[min].val) {
                    min = j; 
                }
            }

            if (min !== index) {
                let tmp = nArr[index]; 
                nArr[index] = nArr[min];
                nArr[min] = tmp; 
            }

        }, [index, nArr])



    const checkIfDone = useCallback( () => {
        for(let i = 1; i < nArr.length; i++) {
            if(nArr[i].val < nArr[i - 1].val) {
                return;
            }     
        }
        setIsDone(true);
        setStart(false);
    }, [nArr, setIsDone, setStart])


    useEffect(() => {
        let timer = setTimeout(() => {
            // setElements(nArr.length)
            checkIfDone();
            if(index < nArr.length && start) {
                console.log(index)

                if(algorithm === "bubble sort")
                    bubbleSort();
                else
                    insertionSort();

                setIndex((prevIndex) => {
                    return prevIndex + 1;
                });
            } else if(!isDone) {
                setIndex(0)
            }

        }, 20);

        return () => clearInterval(timer)

    }, [index, isDone, nArr.length, bubbleSort, checkIfDone, insertionSort, algorithm, start]);

    return(
        <>
            <div className="rectangles">
                {nArr.map((n, i) => {
                    return(
                        <div key={i} style={{content:'', height:`${n.val * 0.2}rem`, width:"10px", background:(n.val - 1)===i?"#AA4A44":n.color}}></div>

                    );
                })}
            </div>
            <a className="reset" href="#" onClick={handleReset} style={{textAlign:'center', margin: '0.5rem'}}>Reset</a>
        </>
        
    );
}

export default Algorithms;