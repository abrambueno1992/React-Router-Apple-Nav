import React from 'react';
import { Link } from 'react-router-dom';
const lsty = {
    margin: 10
};
class IPad extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Hey, you're in the IPad Component</h1>
                <Link style={lsty} to='/iPad/iPadPro'>iPadPro</Link>
                <Link style={lsty} to='/iPad/iPad'>iPad</Link>
                <Link style={lsty} to='/iPad/iPadmini4'>iPad mini 4</Link>
                <Link style={lsty} to='/iPad/iOS11'>iOS 11</Link>
                <Link style={lsty} to='/iPad/Accessories'>Accessories</Link>
                <Link style={lsty} to='/iPad/Compare'>Compare</Link>

            </div>
        )
    }
}
export default IPad;

// import React from 'react';
// import { Link } from 'react-router-dom'
// const lsty = {
//     margin: 10
// };
// const sdiv = {
//     border: '2px solid blue'
// }

// class NavWrappper extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div style={sdiv} >            
//             <Link style={lsty} to='/'>apple</Link>
//             <Link style={lsty} to='/Mac'>Mac</Link>
//             <Link style={lsty} to='/iPad'>iPad</Link>
//             <Link style={lsty} to='/iPhone'>iPhone</Link>
//             <Link style={lsty} to='/Watch'>Watch</Link>
//             <Link style={lsty} to='/TV'>TV</Link>
//             <Link style={lsty} to='/Music'>Music</Link>
//             <Link style={lsty} to='/Support'>Support</Link>
//             <Link style={lsty} to='/search'>search</Link>
//             <Link style={lsty} to='/shop'>shop</Link>
//             <h1>Hey, you're in the NavWrappper Component</h1>
//             </div>
//         )
//     }
// }
// export default NavWrappper;