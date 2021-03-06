import { useState } from "react";


const ProfileIcon = ({username}) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="absolute right-2 top-2">
         <button 
         onClick={() => setIsOpen(!isOpen)}
         className="text-indigo-600 block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus-border-white">
                {/* <img className="h-full w-full object-cover" src=""/> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full object-cover" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
               </svg>
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