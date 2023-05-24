import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { shallowEqualApp, useAppSelector } from './store'

const App = () => {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )
  return (
    <div className="App">
      {count}
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
