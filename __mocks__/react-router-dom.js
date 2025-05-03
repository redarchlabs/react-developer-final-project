jest.mock('react-router-dom', () => ({
    BrowserRouter: jest.fn(({ children }) => <>{children}</>),
    Router: jest.fn(({ children }) => <>{children}</>),
    // ... other components or functions you use
  }));