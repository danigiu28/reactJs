import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <Link to={'/'}>
                        <img src="https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2017/7_13/0/29/175/1945413.png" alt="VANS" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Logo;