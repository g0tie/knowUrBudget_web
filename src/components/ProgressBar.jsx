import { useState } from 'react';
import Modal from "./Modal";
import { calculatePercentage } from '../helpers/common';
import { useMainContext } from '../store/contexts';

const ProgressBar = ({}) => {
    let {state, dispatch} = useMainContext();
    
    const [isOpen, setIsOpen] = useState(false);
    const [limit, setLimit] = useState(state.limit.value);

    let progress = calculatePercentage(state.totalExpenses, limit);
    
    function changeLimit()
    {
      dispatch({type:'setLimit', payload:limit});
      setIsOpen(false);
    }
    return (
      <div className="flex flex-col" style={{width: "400px"}}>
        
        <div className="bg-gray-200  h-10" >
            <div className="bg-indigo-600 h-10" style={{width: progress + "%"}}></div>
        </div>
        
 
      <div className="flex felx-row justify-end">
         <span className="text-right">{state.totalExpenses} / {limit}</span>
         <button 
         onClick={() => setIsOpen(true)}
         style={{transform: "translateY(-13px)"}} className="text-indigo-600 text-center ml-2 shadow-lg rounded-full bg-white h-10 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>
        </button>
      </div>



      <Modal isOpen={isOpen} title="Editer la limite mensuelle" action={changeLimit} closeAction={setIsOpen}> 
          <form className="">
              <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Limite:
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" min={0} type="number" value={limit} onChange={(e) => setLimit(e.target.value)} placeholder="Nouvelle limite" />
              </div>
          </form>
        </Modal>
      </div>
    );
  }
  
export default ProgressBar;
  