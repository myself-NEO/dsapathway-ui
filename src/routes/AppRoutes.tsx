import React from 'react';
import { Box, Typography } from '@mui/material';

// Import different components
import Homepage from '../components/Homepage/Homepage';
import DsaAlgo from '../components/DsaAlgo/DsaAlgo';

interface DemoPageContentProps {
  pathname: string;
}

const AppRoutes = ({ pathname }: DemoPageContentProps) => {
  const renderContent = () => {
    switch (pathname) {
      case '/dashboard':
        return <Homepage />;  // Render DashboardComponent if the path is /dashboard
      case '/dsa-algo':
        return <DsaAlgo />;  // Render ProfileComponent if the path is /profile
      default:
        return <Typography>Page Not Found</Typography>;  // Default fallback if no path matches
    }
  };

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {renderContent()}
    </Box>
  );
};

export default AppRoutes;
