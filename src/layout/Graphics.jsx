import Graph from "../components/Graph"

const Graphics = () => {
    return (
      <div className="flex sm:flex-col md:flex-row items-center justify-around ">
        <Graph title="Cette semaine" type="pie"/>
        <Graph title="Ces Derniers mois" type="bar"/>

      </div>
    );
  }
  
  export default Graphics;
  