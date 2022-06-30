import Graph from "../components/Graph"

const Graphics = () => {
    return (
      <div className="flex xs:flex-col sm:flex-row items-center md:justify-around ">
        <Graph title="Cette semaine" type="pie"/>
        <Graph title="Ces Derniers mois" type="bar"/>

      </div>
    );
  }
  
  export default Graphics;
  