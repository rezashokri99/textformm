import logoHeader from "../images/logo-header.png"

const LogoHeader = () => {
    return (
        <div className="mt-2 ">
            <img className="w-[100px] sm:w-[150px]" src={logoHeader} alt="logo" />
        </div>
    );
}
 
export default LogoHeader;