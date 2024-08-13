import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

const Note = () => {
  return (
    <Alert variant="destructive" className="max-w-md mx-auto mt-4">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Server Unavailable</AlertTitle>
      <AlertDescription>
        The server is currently not in use. Please try again later or contact support if you need immediate assistance.
      </AlertDescription>
    </Alert>
  );
};

export default Note;
