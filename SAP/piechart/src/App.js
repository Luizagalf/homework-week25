import { Pie } from 'react-chartjs-2';
import logo from './logo.svg';
import './App.css';


const data = {
  labels: ['Family', 'Study', 'Sport', 'Work', 'Free time', 'Hobbys'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 20, 3, 10, 2, 6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>My life</h1>
    </div>
    <Pie data={data} width={300} height={300}/>
  </>
);

function App() {
  return (
    <div className="App">
      <PieChart />
    </div>
  );
}

export default App;
