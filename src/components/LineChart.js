import Chart from "react-google-charts"

function LineChart({pieData}){

    return(
        <>
             <Chart width="50vw" height="80vh" chartType="LineChart" data={pieData} options={{title: "Covid-19 Cases and Population"}} />
        </>
    )
}
export default LineChart