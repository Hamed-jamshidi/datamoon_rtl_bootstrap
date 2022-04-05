import React, {PureComponent} from "react";
import { BarChart, Bar,CartesianGrid, PieChart, Pie, Cell, Tooltip, XAxis, YAxis,  Legend } from 'recharts';
import MyAxios from "../components/myAxios"

class Charts extends React.PureComponent {
    // constructor(props) {
    //     super(props);
      
    //     // Initializing the state 
    //     this.state = { color: 'lightgreen' };
    //   }
    constructor(props){
        super(props);
        this.state={
            barData:[[1,0,0],[1,0,0],[0,0,0],[0,0,0]],
            piData:[100,0,0]
        }

    }
   componentDidUpdate(){
    const getDataCharts=async()=> {
        await MyAxios("license/chartLicenseUser/1")
       .then((result)=>{
           console.log('result in did mount' , result);
        //    this.setState({barData:result.data.data.barData});
        //    this.setState({piData:result.data.data.piData});
       })
       
     };
     getDataCharts();
   }
   
 

    COLORS = [ '#00C49F', '#FFBB28', '#FF8042', ];
    NAMES = ["یک هفته ای" , " دو هفته ای" , " یک ماهه" , "  دائمی"];
    barData = this.state.barData;

    barChartData = [
        {
          name: this.NAMES[0],
          pv: this.state.barData[0][1],
          uv: this.state.piData[0][0],
          
          amt: this.state.barData[0][2],
        },
        {
          name: this.NAMES[1],
          uv: this.state.barData[1][0],
          pv: this.state.barData[1][1],
          amt: this.state.barData[1][2],
        },
        {
          name: this.NAMES[2],
          uv: this.state.barData[2][0],
          pv: this.state.barData[2][1],
          amt: this.state.barData[2][2],
        },
        {
          name: this.NAMES[3],
          uv: this.state.barData[3][0],
          pv: this.state.barData[3][1],
          amt: this.state.barData[3][2],
        },
      
      ];
      

    pieData = [
        {
            "name": "معتبر ",
            "value": this.state.piData[0]
        },
        {
            "name": " در حال اتمام ",
            "value":this.state.piData[1]
        },
        {
            "name": " نا معتبر ",
            "value": this.state.piData[2]
        },
        
    ];

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{` ${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };
     RADIAN = Math.PI / 180;
     renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * this.RADIAN);
      const y = cy + radius * Math.sin(-midAngle * this.RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    render() {
        return (
            <>
            <section>
                <div className="container-fluid">
                    <div className="row mb-5">
                     
                        <div className="col-xl-10 col-lg-9 col-md-8 mr-auto">
                        <h3 className="text-muted text-center mb-3"> نمودار مجوزها </h3>
                            <div className="row  charts justify-content-center align-items-center px-sm-0 mx-sm-0">
                            {/* pi charts */}
                                <div className="col-md-12 col-lg-6 text-center pb-sm-5">
                                <PieChart width={730} height={300}>
                                <Pie data={this.pieData} color="#000000"  label={this.renderCustomizedLabel}   dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                                    {
                                        this.pieData.map((entry, index) => <Cell key={`cell- ${index} `} fill={this.COLORS[index % this.COLORS.length]} />)
                                    }
                                </Pie>
                                <Tooltip content={<this.CustomTooltip />} />
                                <Legend />
                            </PieChart>
                                </div>
                            {/* column charts */}
                                <div className="col-md-12 col-lg-6  justify-content-center align-items-center text-center  px-sm-0">
                                <div> <BarChart
                                        width={500}
                                        height={300}
                                        
                                        data={this.barChartData}
                                        // margin={{
                                        //     top: 5,
                                        
                                        //     right: 30,
                                        //     left: 20,
                                        //     bottom: 5,
                                        // }}
                                        >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="pv" fill={this.COLORS[0]}/>
                                        <Bar dataKey="uv" fill={this.COLORS[1]}/>
                                        <Bar dataKey="uv" fill={this.COLORS[2]} />
                                        
                                        </BarChart>
       </div>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                
            </>
            
        )
    };
}

export default Charts;

