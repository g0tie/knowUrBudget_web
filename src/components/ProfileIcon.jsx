import { useState } from "react";


const ProfileIcon = ({username}) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="absolute right-2 top-2">
         <button 
         onClick={() => setIsOpen(!isOpen)}
         className=" block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus-border-white">
                <img className="h-full w-full object-cover" src=""/>
         </button>

         { isOpen && 
            <div className=" absolute right-0 mt-2 w-48 bg-white py-2 rounded-lg shadow-lg">
               <span className="px-4 py-2 w-full block border-b-2 ">{username}</span>
                <a className="mt-2 block px-4 py-2 hover:bg-indigo-600 hover:text-white" href="#">Déconnexion</a>
            </div>
         }
         
      </div>
    );
  }
  
  export default ProfileIcon;