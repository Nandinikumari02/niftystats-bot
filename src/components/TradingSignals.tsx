import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, TrendingUp, TrendingDown } from "lucide-react";

const TradingSignals = () => {
  const signals = [
    {
      id: 1,
      stock: "RELIANCE",
      type: "BUY",
      price: 2845.60,
      rsi: 28.4,
      maSignal: "20-DMA crossed above 50-DMA",
      confidence: 85,
      timestamp: "2 minutes ago",
      status: "ACTIVE"
    },
    {
      id: 2,
      stock: "INFY",
      type: "BUY",
      price: 1842.40,
      rsi: 32.1,
      maSignal: "Bullish crossover confirmed",
      confidence: 78,
      timestamp: "15 minutes ago",
      status: "ACTIVE"
    },
    {
      id: 3,
      stock: "WIPRO",
      type: "SELL",
      price: 445.20,
      rsi: 72.3,
      maSignal: "Bearish divergence",
      confidence: 73,
      timestamp: "1 hour ago",
      status: "EXECUTED"
    }
  ];

  return (
    <Card className="shadow-trading">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Trading Signals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {signals.map((signal) => (
          <div key={signal.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <Badge 
                  variant="secondary" 
                  className={`${
                    signal.type === 'BUY' ? 'text-profit' : 'text-loss'
                  } flex items-center gap-1`}
                >
                  {signal.type === 'BUY' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {signal.type}
                </Badge>
                <span className="font-semibold">{signal.stock}</span>
                <span className="text-muted-foreground">₹{signal.price}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>RSI: {signal.rsi}</div>
                <div>Confidence: {signal.confidence}%</div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                {signal.maSignal}
              </div>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {signal.timestamp}
                <Badge variant="outline" className="ml-2">
                  {signal.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TradingSignals;