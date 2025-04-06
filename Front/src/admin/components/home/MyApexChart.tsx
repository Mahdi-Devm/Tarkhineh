import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { salesDetailsData } from '../../../constants/salesDetailsData'
const MyApexChart = () => {
  const [state] = useState({
    series: [
      {
        data: salesDetailsData,
      },
    ],
    options: {
      chart: {
        id: 'area-datetime',
        type: 'area',
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
        animations: {
          enabled: true,
          speed: 800,
          animateGradually: {
            enabled: false,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      colors: ['#47875C'], // 👈 اضافه شده برای تغییر رنگ
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: '#999',
          },
        ],
        xaxis: [
          {
            x: new Date('14 Nov 2024').getTime(),
            borderColor: '#999',
            yAxisIndex: 0,
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2024').getTime(),
        tickAmount: 6,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },
  })

  return (
    <section className="mt-12 rounded-2xl bg-white px-2 py-4 md:px-6">
      <h5 className="text-light-black text-2xl font-bold">Sales Details</h5>
      <div id="chart">
        <div id="chart-timeline">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
      <div id="html-dist"></div>
    </section>
  )
}

export default MyApexChart
