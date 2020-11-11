import React from 'react';
import { Route } from 'react-router-dom';

function DefaultLayout({ component: Component, ...props }) {
    return (
        <Route
            {...props}
            render={(routerProps) => (
                <>
                    <div className="main">
                        <Component {...routerProps} />
                    </div>
                </>
            )}
        />
    );
}

export default DefaultLayout; 