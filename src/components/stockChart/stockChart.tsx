import { ApexOptions } from 'apexcharts';
import { useState, useEffect, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { _stockData } from 'src/_mock/_stockData';

interface StockData {
  date: string;
  price: number;
}

export default function StockChart() {
  const initialOptions = useMemo(() => ({
    chart: {
      type: 'line' as const,
      height: 350,
    },
    xaxis: {
      categories: [] as string[],
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: "Apple Stock Prices (AAPL)",
      align: 'center' as const,
    },
  } as ApexOptions), []);

  const [chartData, setChartData] = useState({
    series: [{ name: "AAPL Price", data: [] as number[] }],
    options: initialOptions,
  });

  useEffect(() => {
    setChartData({
      series: [{ 
        name: "AAPL Price", 
        data: _stockData.map((d: StockData) => d.price) 
      }],
      options: {
        ...initialOptions,
        xaxis: { 
          categories: _stockData.map((d:StockData) => d.date) 
        },
      },
    });
  }, [initialOptions]);

  return (
    <Chart 
      options={chartData.options} 
      series={chartData.series} 
      type="line" 
      height={350} 
    />
  );
}