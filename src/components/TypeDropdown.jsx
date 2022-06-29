const TypeDropdown = ({typelist}) => {
    return (
      <div className="flex flex-row items-center my-2">
        <p>Trier par: </p> 
        <select className="ml-2 p-2">
            {
                typelist && typelist.map((type, index) => (
                    <option value={index}>{type}</option>
                ))
            }
        </select>
      </div>
    );
  }
  
export default TypeDropdown;
  