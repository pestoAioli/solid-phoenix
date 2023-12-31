import { render } from 'solid-js/web';

import { Provider } from './contexts/auth-context-provider';
import { Route, Router, Routes } from '@solidjs/router';
import { Home } from './pages/home';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() =>
  <Provider>
    <Router>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  </Provider>,
  root!);
