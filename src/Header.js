import React from 'react';
import './Header.css';
const Header = function(props) {
    return(
        <div className='header'>
            {props.instructor}
        </div>
    )
} // functional component

// class Header extends Component {
//     render() {
//         return (
//             <div className='header'>
//              Phone Directory
//             </div>
//         )
//     }
// } //class component
export default Header;