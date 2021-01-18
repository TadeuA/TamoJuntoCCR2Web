import React from 'react';
import { Route as CustomRoute } from 'react-router-dom';
import { RouteProps } from './interface';
import { Header, Footer } from '../components/organisms';
import { Container, Div } from './styled';

const RouterProvider: React.FC = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Div />

    <Footer />
  </Container>
);

const Route: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  return (
    <CustomRoute
      {...rest}
      render={() => {
        return isPrivate ? (
          <RouterProvider>
            <Component />
          </RouterProvider>
        ) : (
          <RouterProvider>
            <Component style={{ gridArea: 'forms' }} />
          </RouterProvider>
        );
      }}
    />
  );
};

export * from 'react-router-dom';

export { Route };
