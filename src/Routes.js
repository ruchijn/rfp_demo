import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// Utils
import PageLoader from './modules/common/PageLoader';

// Routes
import DataGrid from './modules/layouts/DataGrid';

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          path="/"
          render={props => {
            return <DataGrid {...props} />;
          }}
        />
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;
