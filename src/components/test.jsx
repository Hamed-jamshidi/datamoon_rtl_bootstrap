import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend

);
export const options= {
    responsive:true,
    plugins:{
        legend:{
           position:"top",
           labels: {
           }
        },
        title:{
            display:true,
            text:"تعداد  ",
        },

    },
}
const labels = ['یک هفته ای  ' , " دو هفته " , " یک ماه" ,  " دائمی"] ;
export const data = {
    labels,
    datasets:[
        {
            label:'Dataset 1' , 
            data: [10 , 12 , 14 , 18],
            backgroundColor:'rgba(255 , 99 , 132 , 0.5)',

        },
        {
            label:'Dataset 2' , 
            data: [15 , 14 , 8 , 8],
            backgroundColor:'rgba(53 , 162 , 232 , 0.5)',
        },
    ],
};
export default function Test (){
    return(
        <div class="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <Bar options={options} data={data}/>
                </div>
            </div>
        </div>
    )
};