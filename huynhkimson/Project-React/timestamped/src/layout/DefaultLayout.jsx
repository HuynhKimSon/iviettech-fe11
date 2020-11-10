import React from 'react';
import { Route } from 'react-router-dom';

function DefaultLayout({ component: Component, ...props }) {
    console.log("DefaultLayout -> props", props)
    console.log("DefaultLayout -> Component", Component)
    return (
        <>
            <div className="container-todolistID">
                <Route {...props} component={Component} />
            </div>
        </>
    );
}

export default DefaultLayout; 