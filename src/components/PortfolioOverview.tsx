import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";

const PortfolioOverview = () => {
  const portfolioData = {
    totalValue: 125840.50,
    dayChange: 2340.20,
    dayChangePercent: 1.89,
    totalPnL: 15840.50,
    totalPnLPercent: 14.4,
    positions: 8,
    winRate: 67.2
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="shadow-trading">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹{portfolioData.totalValue.toLocaleString()}</div>
          <div className="flex items-center space-x-1 text-xs text-profit">
            <TrendingUp className="h-3 w-3" />
            <span>+₹{portfolioData.dayChange.toLocaleString()} ({portfolioData.dayChangePercent}%)</span>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-trading">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total P&L</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-profit">+₹{portfolioData.totalPnL.toLocaleString()}</div>
          <div className="flex items-center space-x-1 text-xs text-profit">
            <TrendingUp className="h-3 w-3" />
            <span>+{portfolioData.totalPnLPercent}% overall</span>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-trading">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
          <Badge variant="secondary">{portfolioData.positions}</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{portfolioData.positions}</div>
          <p className="text-xs text-muted-foreground">
            Across NIFTY 50 stocks
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-trading">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-profit">{portfolioData.winRate}%</div>
          <p className="text-xs text-muted-foreground">
            Last 30 days
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioOverview;