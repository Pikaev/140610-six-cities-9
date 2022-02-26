import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import Favorites from '../favorites/favorites';
import Login from '../login/login';
import MainScreen from '../mainScreen/mainScreen';
import NotFoundScreen from '../notFoundScreen/notFoundScreen';
import Offer from '../offer/offer';
import PrivateRoute from '../privateRoute/privateRoute';

type AppScreenProps = {
  placeCount: number;
}

function App({ placeCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.MainScreen}
          element={<MainScreen placeCount={placeCount} />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
