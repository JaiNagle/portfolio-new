import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404: attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="text-center space-y-4">
        <p className="font-mono text-sm text-slate">404</p>
        <h1 className="font-display text-3xl">This page doesn't exist</h1>
        <a
          href="/"
          className="inline-block text-signal underline underline-offset-4 hover:no-underline"
        >
          Back to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
