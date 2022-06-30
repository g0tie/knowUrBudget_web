import { useState } from 'react';
import Modal from "./Modal";

function calculatePercentage(value, max) {
    return (value / max) * 100;
}

const ProgressBar = ({current, limit}) => {
    let progress = calculatePercentage(current, limit);
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="flex flex-col" style={{width: "400px"}}>
        
        <div className="bg-gray-200  h-10" >
            <div className="bg-indigo-600 h-10" style={{width: progress}}></div>
        </div>
        
 
      <div className="flex felx-row justify-end">
         <span className="text-right">{current} / {limit}</span>
         <button 
         onClick={() => setIsOpen(true)}
         style={{transform: "translateY(-13px)"}} className="text-indigo-600 text-center ml-2 shadow-lg rounded-full bg-white h-10 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>
        </button>
      </div>



      <Modal isOpen={isOpen} title="Editer la limite mensuelle" action={() => alert("test")} closeAction={setIsOpen}> 
          <form class="">
              <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Titre
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Titre" />
              </div>
          </form>
        </Modal>
      </div>
    );
  }
  
export default ProgressBar;
  