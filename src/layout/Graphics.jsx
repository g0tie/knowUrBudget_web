import Graph from "../components/Graph"
import { useMainContext } from "../store/contexts";

const data = {
  labels: ['Alimentaire', 'Divertissement', 'Vehicule'],
  datasets: [
    {
      label: '# of Votes',
      data: [150, 35, 40],
      backgroundColor: [
        '#083d77',
        '#f97068',
        '#f9dc5c',
        '#7d1d3f',
        '#2fbf71',
        '#e86a92',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

const Graphics = () => {
  const {state} = useMainContext();

    return (
      <div className="flex md:flex-1 xs:flex-col sm:flex-row items-center md:justify-around ">
        <Graph title="Cette semaine" type="pie" data={data}/>
        <Graph title="Ces Derniers mois" type="bar" data={data}/>

      </div>
    );
  }
  
  export default Graphics;
  