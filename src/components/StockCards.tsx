import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

const StockCards = () => {
  const stocks = [
    {
      symbol: "RELIANCE",
      name: "Reliance Industries",
      price: 2845.60,
      change: 42.30,
      changePercent: 1.51,
      rsi: 28.4,
      signal: "BUY",
      maSignal: "BULLISH",
      volume: "2.1M"
    },
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      price: 3990.25,
      change: -15.80,
      changePercent: -0.39,
      rsi: 65.2,
      signal: "HOLD",
      maSignal: "NEUTRAL",
      volume: "1.5M"
    },
    {
      symbol: "INFY",
      name: "Infosys Limited",
      price: 1842.40,
      change: 8.90,
      changePercent: 0.49,
      rsi: 32.1,
      signal: "BUY",
      maSignal: "BULLISH",
      volume: "3.2M"
    }
  ];

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case "BUY": return "profit";
      case "SELL": return "loss";
      default: return "warning";
    }
  };

  const getSignalIcon = (signal: string) => {
    switch (signal) {
      case "BUY": return <TrendingUp className="h-3 w-3" />;
      case "SELL": return <TrendingDown className="h-3 w-3" />;
      default: return <AlertTriangle className="h-3 w-3" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stocks.map((stock) => (
        <Card key={stock.symbol} className="shadow-trading hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold">{stock.symbol}</CardTitle>
                <p className="text-sm text-muted-foreground">{stock.name}</p>
              </div>
              <Badge 
                variant="secondary" 
                className={`text-${getSignalColor(stock.signal)} flex items-center gap-1`}
              >
                {getSignalIcon(stock.signal)}
                {stock.signal}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">₹{stock.price.toLocaleString()}</span>
              <span className={`flex items-center gap-1 text-sm ${
                stock.change >= 0 ? 'text-profit' : 'text-loss'
              }`}>
                {stock.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {stock.change >= 0 ? '+' : ''}₹{stock.change} ({stock.changePercent}%)
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">RSI</span>
                <div className={`font-semibold ${
                  stock.rsi < 30 ? 'text-profit' : stock.rsi > 70 ? 'text-loss' : 'text-warning'
                }`}>
                  {stock.rsi}
                </div>
              </div>
              <div>
                <span className="text-muted-foreground">Volume</span>
                <div className="font-semibold">{stock.volume}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">MA Signal:</span>
              <Badge variant="outline" className="text-xs">
                {stock.maSignal}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StockCards;