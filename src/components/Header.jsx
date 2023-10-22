import React from 'react';

const Header = ()=>{
    const isLoggedIn = true;
    return(
        <header>
            {isLoggedIn ?(
                <h1>Welcome, User!</h1>
            ):(
                <h1>Welcome, Guest!</h1>
            )};
        </header>
    );
};

export default Header;