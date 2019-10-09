import React from 'react';
import classes from './Layout.module.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => (
    <div className={classes.Layout}>
        <div>
            <Toolbar/>
            <SideDrawer/>
        </div>
        <main>
            {props.children}
        </main>
    </div>
);

export default Layout;