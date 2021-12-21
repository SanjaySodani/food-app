import React from 'react';
import './App.css'

function Home() {
    return (
        <div id='container' style={{ height: "91vh" }}>
            <div className='container h-100'>
                <div className='row align-items-center h-100'>
                    <div className='col mx-auto'>
                        <div className='jumbotron my-auto'>
                            <p className='display-4'>Get Food!</p>
                            <p className='lead'>Food app task using useContext in ReactJs.</p>
                            <hr className='my-4' />
                            <p>Context is created in App.js and the data shared with components Pizza and Burger.
                                Click on the nav links to visit those pages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;