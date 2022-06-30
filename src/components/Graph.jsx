import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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

const options = {
    legend: {
        position: 'bottom',
        labels: {
            fontColor: "white",
            boxWidth: 20,
            padding: 20
        }
    }
};

const Graph = ({title}) => {
    return(
        <div className='w-96'>
            <h1 className='text-center text-2xl font-bold'>{title}</h1>
            <Pie data={data} options={options} />
        </div>
      
    )
}

export default Graph;