import { RouterProvider } from 'react-router-dom';
import { Router } from './modules/core/routes';
import './styles.scss';

const App = () => <RouterProvider router={Router} />;

export default App;
