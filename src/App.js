import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react';

import { publicRoutes } from '~/routes/index'
import { DefaultLayout } from '~/components/Layout'

function App() {
    return (
        <Router>
            <div className="App">

                <Routes>
                    {publicRoutes.map((route, i) => {

                        let Layout = DefaultLayout
                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        const Page = route.component

                        return <Route key={i} path={route.path} element={
                            <Layout><Page /></Layout>
                        } />
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App
