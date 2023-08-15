import {Link} from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () =>  {
    return(
        <div className={styles.navCont}> 
            <div className={styles.navImg}>
                <Link to={"/"}>
                    <img src="https://i.gifer.com/origin/ae/ae8552cd3112e8999c3629a79ca210c8_w200.gif" alt="" />
                </Link>
            </div>
            <div className={styles.navLink}> 
                <Link to={"/home"}>Home</Link>
                <Link to={"/activity"}>Activity</Link>
                
            </div>
            <div className={styles.navImg2}>
                <img src="https://www.shutterstock.com/shutterstock/videos/1068356963/thumb/1.jpg?ip=x480" alt="" />
            </div>
        </div>
    )
}
export default Navbar;