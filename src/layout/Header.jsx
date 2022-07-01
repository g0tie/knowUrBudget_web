import ProgressBar from "../components/ProgressBar";
import ProfileIcon from "../components/ProfileIcon";
import {useMainContext} from "../store/contexts"

const Header = () => {
    const {state} = useMainContext()

    return (
      <div className="m-5 flex flex-row justify-center  ">
        <ProgressBar current={state.limit.value} limit={500} />
        <ProfileIcon username={state.user.name}/>
      </div>
    );
  }
  
  export default Header;
  