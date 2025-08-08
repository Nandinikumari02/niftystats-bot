import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock, FileSpreadsheet, MessageSquare, Play, Pause } from "lucide-react";

const AutomationStatus = () => {
  const integrations = [
    {
      name: "Google Sheets",
      status: "CONNECTED",
      lastSync: "2 minutes ago",
      description: "Trade logs & P&L tracking",
      icon: FileSpreadsheet
    },
    {
      name: "Telegram Alerts",
      status: "CONNECTED",
      lastSync: "5 minutes ago",
      description: "Signal notifications",
      icon: MessageSquare
    },
    {
      name: "Data API",
      status: "ACTIVE",
      lastSync: "30 seconds ago",
      description: "Live stock data feed",
      icon: CheckCircle
    }
  ];

  const automationTasks = [
    {
      name: "Strategy Scanner",
      status: "RUNNING",
      nextRun: "In 15 minutes",
      description: "RSI + MA crossover detection"
    },
    {
      name: "ML Predictions",
      status: "RUNNING",
      nextRun: "In 45 minutes",
      description: "Next-day price movement"
    },
    {
      name: "Portfolio Sync",
      status: "RUNNING", 
      nextRun: "In 2 minutes",
      description: "Update Google Sheets"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "CONNECTED":
      case "ACTIVE":
      case "RUNNING":
        return "text-profit";
      case "ERROR":
        return "text-loss";
      default:
        return "text-warning";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "CONNECTED":
      case "ACTIVE":
      case "RUNNING":
        return <CheckCircle className="h-4 w-4 text-profit" />;
      case "ERROR":
        return <XCircle className="h-4 w-4 text-loss" />;
      default:
        return <Clock className="h-4 w-4 text-warning" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-trading">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5" />
            Integration Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {integrations.map((integration) => (
            <div key={integration.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <integration.icon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-semibold">{integration.name}</div>
                  <div className="text-sm text-muted-foreground">{integration.description}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  {getStatusIcon(integration.status)}
                  <Badge variant="outline" className={getStatusColor(integration.status)}>
                    {integration.status}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">{integration.lastSync}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-trading">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Automation Tasks
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Pause className="h-4 w-4 mr-1" />
              Pause All
            </Button>
            <Button variant="secondary" size="sm">
              <Play className="h-4 w-4 mr-1" />
              Resume All
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {automationTasks.map((task) => (
            <div key={task.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div>
                <div className="font-semibold">{task.name}</div>
                <div className="text-sm text-muted-foreground">{task.description}</div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  {getStatusIcon(task.status)}
                  <Badge variant="outline" className={getStatusColor(task.status)}>
                    {task.status}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">{task.nextRun}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AutomationStatus;