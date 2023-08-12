import {Link} from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () =>  {
    return(
        <div className={styles.navCont}> 
            <div className={styles.navImg}>
                <Link to={"/"}>
                    <img src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2022/01/28/61f3c1f2a993a.jpeg" alt="" />
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