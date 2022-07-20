const TypeDropdown = ({typelist}) => {
    return (
      <div className="flex flex-row items-center my-2 ">
        <p>Sélectionner un type: </p> 
        <select className="ml-2 p-2 form-select appearance-none
    w-56
      block
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            {
                typelist && typelist.map((type, index) => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                ))
            }
        </select>
      </div>
    );
  }
  
export default TypeDropdown;
  