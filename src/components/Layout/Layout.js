import React, {useState} from 'react';
import classes from './Layout.module.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {

    const [openDrawer, setOpenDrawer] = useState(true);
    const sideDrawerClosedHandler = () =>{
        setOpenDrawer(false);
    }

    const onDrawerToggleClickHandler = () =>{
        setOpenDrawer(!openDrawer);
        console.log(openDrawer);
    }

    return (
    <div className={classes.Layout}>
        <div>
            <Toolbar onClickDrawerToggle={onDrawerToggleClickHandler}/>
            <SideDrawer open={openDrawer} closed={sideDrawerClosedHandler}/>
        </div>
        <main>
            {props.children}
        </main>
    </div>
    );
};

export default Layout;