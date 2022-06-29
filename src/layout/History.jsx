import Expense from "../components/Expense";
import TypeDropdown from "../components/TypeDropdown";

const History = () => {
    return (
      <div className="">
        <TypeDropdown typelist={["Alimentaire", "Divertissement", "Vehicule"]}/>
        <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
      </div>
    );
  }
  
export default History;
  