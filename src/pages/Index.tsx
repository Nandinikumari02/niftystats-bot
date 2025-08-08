import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PortfolioOverview from "@/components/PortfolioOverview";
import StockCards from "@/components/StockCards";
import TradingSignals from "@/components/TradingSignals";
import MLPredictions from "@/components/MLPredictions";
import AutomationStatus from "@/components/AutomationStatus";
import { BarChart, TrendingUp, Brain, Settings, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-profit to-info bg-clip-text text-transparent">
                AlgoTrader Pro
              </h1>
              <p className="text-sm text-muted-foreground">
                ML-Powered Trading System with Automation
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-profit animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Live Data</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Portfolio Overview */}
          <section>
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Portfolio Overview
            </h2>
            <PortfolioOverview />
          </section>

          {/* Main Content Tabs */}
          <Tabs defaultValue="stocks" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="stocks" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Stocks & Signals
              </TabsTrigger>
              <TabsTrigger value="ml" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                ML Predictions
              </TabsTrigger>
              <TabsTrigger value="automation" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Automation
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="stocks" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold mb-4">NIFTY 50 Stocks</h3>
                  <StockCards />
                </div>
                <div>
                  <TradingSignals />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ml" className="space-y-6">
              <MLPredictions />
            </TabsContent>

            <TabsContent value="automation" className="space-y-6">
              <AutomationStatus />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-trading">
                  <CardHeader>
                    <CardTitle>Strategy Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">RSI Strategy</span>
                        <span className="font-semibold text-profit">+12.4%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">MA Crossover</span>
                        <span className="font-semibold text-profit">+8.7%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Combined Strategy</span>
                        <span className="font-semibold text-profit">+15.2%</span>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">6-Month Backtest Results</div>
                        <div className="text-2xl font-bold text-profit">+18.3%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-trading">
                  <CardHeader>
                    <CardTitle>Trading Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Total Trades</span>
                        <span className="font-semibold">142</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Win Rate</span>
                        <span className="font-semibold text-profit">67.2%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Avg Profit per Trade</span>
                        <span className="font-semibold text-profit">₹2,340</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Max Drawdown</span>
                        <span className="font-semibold text-loss">-4.2%</span>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
                        <div className="text-2xl font-bold text-profit">1.85</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 backdrop-blur supports-[backdrop-filter]:bg-card/30 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>AlgoTrader Pro - Automated Trading System with ML Integration</p>
            <p className="mt-2">Built with React, TypeScript & Professional Trading Strategies</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;