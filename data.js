import zm1 from './public/zm1.png'
import yuki from './public/yuki.png'
import recipe from './public/recipe.png'
import spacestagram from './public/spacestagram-landing.png'
import mapper from './public/mapper.png'
import chess from './public/chess.png'
import algorithmVisualization from '/public/algorithms.png'
import dcCV from '/public/dc-cv.png'

let data = {
    projects:  [
        {
            name: "Spacestagram",
            description: "A mock social media platform created using the NASA Mars Rover API",
            image: spacestagram,
            github:"https://github.com/dylncheng/spacestagram",
            link: "https://dylncheng.github.io/spacestagram/"
        },
        {
            name: "Portfolio Website",
            description: "Why make another portfolio website when you already have one? For fun, of course. This portfolio website was based on a single idea I had about my name exploding. What better way to test my skills in React animations?",
            image: dcCV,
            github:"https://github.com/dylncheng/dc-cv",
            link: ""
        },
        {
            name: "OSM Mapper",
            description: "A C++ project using OSM and GTK with implementation of A*, Multi-Dijktra, and clustering algorithms for path finding and map visualization.",
            image: mapper,
            github:"",
            link: ""
        },
        {
            name: "Silverman chess",
            description: "A chess game written with C assembly-level programming, and using interrupts for keyboard input in conjunction with double-buffering for the graphical interface",
            image: chess,
            github:"https://github.com/chris-jpark/SilvermanChess_FPGA",
            link: "https://dylncheng.github.io/spacestagram/"
        },
        {
            name: "Yuki Weather App",
            description: "A weather app created with the purpose of being minimalistic and accessible. ",
            image: yuki,
            github:"https://github.com/dylncheng/weather-app-new",
            link: "https://weather-app-newest.herokuapp.com/"
        },
        {
            name: "Recipe API",
            description: "A recipe API created as an exercise to be able to implement REST priciples for a large amount of data. The API interacts with a database with over 200,000 recipes, which were parsed from a CSV file.",
            image: recipe,
            github:"https://github.com/dylncheng/recipeAPI",
            link: ""
        },
        {
            name: "Zen-mo Task App",
            description: "Created for NewHacks 2021: A task app with an intuitive interface for students to use.",
            image: zm1,
            github:"https://github.com/dylncheng/productivity-app",
            link: "https://devpost.com/software/zen-mo"
        },
        {
            name: "Algorithm Visualization",
            description: "easter egg :)",
            image: algorithmVisualization,
            link: "/projects/algorithm-visualization"
        }
    ]
};

const algorithms = {
    sorting: ["insertion sort"],
    // pathfinding: ["dijkstra", "a* search algorithm", "d* algorithm"]
}

export {data, algorithms};