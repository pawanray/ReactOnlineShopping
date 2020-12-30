import React from 'react';


import Navbar from './Navbar';
function AppHeader() {
    return (
        <>

            <div>
                <div className="menubar col-12">
                    <div className="row">

                        <div className="logo col-sm-3"><i className="fa fa-shopping-cart"></i>Online Shopping</div>
                        <div className="col-sm-9">
                            <Navbar />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AppHeader

