import { Route, Routes, unstable_HistoryRouter as HistoryBrowser, } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import HomeTemplate from './templates/home-template';
import ResponsiveItem from './components/responsive-item';
import Home from './pages/home/home';
import './assets/scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageConstant } from './common/page.constant';
import Detail from './pages/detail/detail';
import Login from './pages/login/login';
export const history: any = createBrowserHistory()


export default function App() {
    return (
        <HistoryBrowser history={history}>
            <Routes>
                <Route path='/' element={<HomeTemplate />}>
                    <Route index path={`${PageConstant.home}`} element={<ResponsiveItem component={Home} componentMobile={Home} />}></Route>
                    <Route path={`${PageConstant.detail}/:id`} element={<Detail />}></Route>
                    <Route path={`${PageConstant.login}`} element={<Login />}></Route>
                </Route>
            </Routes>
        </HistoryBrowser>
    )
}