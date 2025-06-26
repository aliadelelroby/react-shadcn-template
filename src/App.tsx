import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Main application component featuring a simple counter with clean shadcn/ui styling
 */
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Vite + React</CardTitle>
          <CardDescription>
            Modern React development with shadcn/ui components
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={() => setCount((count) => count + 1)}
              size="lg"
              className="min-w-[200px]"
            >
              Count is{" "}
              <Badge variant="secondary" className="ml-2">
                {count}
              </Badge>
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Edit{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">
                src/App.tsx
              </code>{" "}
              and save to test HMR
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
