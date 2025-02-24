import { Container, Typography } from '@mui/material';
import StockChart from 'src/components/stockChart/stockChart';

export default function StocksPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Apple Stock Prices (AAPL)
      </Typography>
      <StockChart />
    </Container>
  );
}
