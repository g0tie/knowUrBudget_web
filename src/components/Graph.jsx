import { Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement, 
    Tooltip, 
    Legend,
    Title 
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
);


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

const Graph = ({title, type, data}) => {
    return(
        <div className='w-96'>
            <h1 className='text-center text-2xl font-bold'>{title}</h1>
            {
                type === "pie" ?
                <Pie data={data} options={options} />
                :
                <Bar options={options} data={data} />
            }
        </div>
      
    )
}

export default Graph;