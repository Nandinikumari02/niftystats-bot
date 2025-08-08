import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, TrendingUp, TrendingDown } from "lucide-react";

const MLPredictions = () => {
  const predictions = [
    {
      stock: "RELIANCE",
      prediction: "UP",
      probability: 78.4,
      priceTarget: 2920,
      currentPrice: 2845.60,
      features: {
        rsi: 28.4,
        macd: "BULLISH",
        volume: "HIGH",
        sentiment: "POSITIVE"
      }
    },
    {
      stock: "TCS",
      prediction: "DOWN",
      probability: 65.2,
      priceTarget: 3850,
      currentPrice: 3990.25,
      features: {
        rsi: 65.2,
        macd: "BEARISH",
        volume: "MEDIUM",
        sentiment: "NEUTRAL"
      }
    },
    {
      stock: "INFY",
      prediction: "UP",
      probability: 72.1,
      priceTarget: 1895,
      currentPrice: 1842.40,
      features: {
        rsi: 32.1,
        macd: "BULLISH",
        volume: "HIGH",
        sentiment: "POSITIVE"
      }
    }
  ];

  const modelStats = {
    accuracy: 73.5,
    precision: 71.2,
    recall: 68.9,
    f1Score: 70.0
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-trading">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            ML Model Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-profit">{modelStats.accuracy}%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{modelStats.precision}%</div>
              <div className="text-sm text-muted-foreground">Precision</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{modelStats.recall}%</div>
              <div className="text-sm text-muted-foreground">Recall</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{modelStats.f1Score}%</div>
              <div className="text-sm text-muted-foreground">F1-Score</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-trading">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Next-Day Predictions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {predictions.map((pred) => (
            <div key={pred.stock} className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-lg">{pred.stock}</span>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      pred.prediction === 'UP' ? 'text-profit' : 'text-loss'
                    } flex items-center gap-1`}
                  >
                    {pred.prediction === 'UP' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {pred.prediction}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Target</div>
                  <div className="font-semibold">₹{pred.priceTarget}</div>
                </div>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Confidence</span>
                  <span className="font-semibold">{pred.probability}%</span>
                </div>
                <Progress value={pred.probability} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground">RSI:</span>
                  <span className="ml-1 font-medium">{pred.features.rsi}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">MACD:</span>
                  <span className="ml-1 font-medium">{pred.features.macd}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Volume:</span>
                  <span className="ml-1 font-medium">{pred.features.volume}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Sentiment:</span>
                  <span className="ml-1 font-medium">{pred.features.sentiment}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MLPredictions;