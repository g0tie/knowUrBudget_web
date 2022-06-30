import ProgressBar from "../components/ProgressBar";
import ProfileIcon from "../components/ProfileIcon";

const Header = () => {
    return (
      <div className="m-5 flex flex-row justify-center  ">
        <ProgressBar current={235} limit={500} />
        <ProfileIcon username={"Francis"}/>
      </div>
    );
  }
  
  export default Header;
  