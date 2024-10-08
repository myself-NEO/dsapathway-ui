import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderIcon from '@mui/icons-material/Folder';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Session, Router, Navigation } from '@toolpad/core';
import AppRoutes from './routes/AppRoutes';

const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'dsa-algo',
    title: 'DSA & Algo',
    icon: <FolderIcon />,
    }
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutAccount(props: DemoProps) {
  const { window } = props;

  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: 'Keshav Jha',
      email: 'neokkj11@gmail.com',
      image: 'https://avatars.githubusercontent.com/u/40928377?v=4',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Keshav Jha',
            email: 'neokkj11@gmail.com',
            image: 'https://avatars.githubusercontent.com/u/40928377?v=4',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <AppRoutes pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
