import { Provider }      from 'react-redux';
import { Route, Routes } from 'react-router';
import { Body }          from './layout/Body';
import { Content }       from './layout/Content';
import { Footer }        from './layout/Footer';
import { Header }        from './layout/Header';
import { HomePage }      from './pages/HomePage';
import { NewsPage }      from './pages/NewsPage';
import store             from './globalState/store';
import './assets/font-awesome-4.7.0/css/font-awesome.css'
import  './App.scss'

function App() {
    return (
        <Provider store={store}>
            <Body>
                <Header/>
                <Content>
                    <Routes>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route path={'/news'} element={<NewsPage/>}/>
                    </Routes>
                </Content>
                <Footer/>
            </Body>
        </Provider>
    )
}

export default App;
