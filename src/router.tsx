import { createBrowserRouter } from 'react-router-dom';
import Topbar from './core/Topbar';
import AbilitiesSaves from './pages/AbilitiesSaves';
import Skills from './pages/Skills';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Topbar />,
    children: [
      {
        path: '/',
        element: <AbilitiesSaves />,
      },
      {
        path: '/actions',
        element: (
          <div>
            <h1 className="text-3xl font-bold underline text-pink-400">
              Azioni
            </h1>
          </div>
        ),
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/notes',
        element: (
          <div>
            <h1 className="text-3xl font-bold underline text-pink-400">Note</h1>
          </div>
        ),
      },
      {
        path: '/background',
        element: (
          <div>
            <h1 className="text-3xl font-bold underline text-pink-400">
              Background
            </h1>
          </div>
        ),
      },
    ],
  },
]);
