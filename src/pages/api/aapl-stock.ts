

interface StockData {
    date: string;
    price: number;
}

interface Response {
    status: (code: number) => Response;
    json: (data: any) => Response;
}

export default function handler(res: Response) {
    const stockData: StockData[] = [
        { date: '2023-03-01', price: 145 },
        { date: '2023-04-01', price: 150 },
        { date: '2023-05-01', price: 155 },
        { date: '2023-06-01', price: 160 },
        { date: '2023-07-01', price: 165 },
        { date: '2023-08-01', price: 170 },
        { date: '2023-09-01', price: 175 },
        { date: '2023-10-01', price: 180 },
        { date: '2023-11-01', price: 185 },
        { date: '2023-12-01', price: 190 },
        { date: '2024-01-01', price: 195 },
        { date: '2024-02-01', price: 200 },
    ];

    return res.status(200).json(stockData);
}
  