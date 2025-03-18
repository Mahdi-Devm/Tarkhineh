import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import routes from './routes'

const PanelAdmin: React.FC = () => {
  return (
    <main className="overflow-x-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
              {route.children &&
                route.children.map((childRoute, i) => (
                  <Route
                    key={i}
                    path={childRoute.path}
                    element={childRoute.element}
                  />
                ))}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </main>
  )
}

export default PanelAdmin
