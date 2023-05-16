// const searchName=(value : string | null) => {
//     if(value === null){
//         console.log("No search")
//     }
//     else{
//         console.log("Searching...")
//     }
// }

// // searchName(null)
 
// const getMyCarSpeed = (speed : unknown ) => {
//     if(typeof speed === 'number'){
//         const convertedSpeed = (speed * 1000) / 3600;
//         console.log(`My speed is ${convertedSpeed} m/s`)
//     }
//     if(typeof speed === 'string'){
//         const value = parseInt(speed.split(' ')[0])
//         const convertedSpeed = (value * 1000) / 3600;
//         console.log(`Converted speed is ${convertedSpeed} m/s`)
//     }
// }

// getMyCarSpeed(10)
// getMyCarSpeed("15 km")