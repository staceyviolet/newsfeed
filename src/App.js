import { Provider }      from 'react-redux';
import { Route, Routes } from 'react-router';
import store             from './globalState/store';
import { Body }          from './layout/Body';
import { Footer }        from './layout/Footer';
import { Header }        from './layout/Header';
import { HomePage }      from './pages/HomePage';
import { NewsPage }      from './pages/NewsPage';
import './assets/fontawesome-free-6.1.1-web/css/all.css'

function App() {
    return (
        <Provider store={store}>
            <Body>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/news'} element={<NewsPage/>}/>
                </Routes>
                <Footer/>
            </Body>
        </Provider>
    )
}

export default App;
