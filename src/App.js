// import logo from './logo.svg';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Layout from './components/Layout';
import ProfileSection from './components/ProfileSection';

function App() {
  return (
    <Layout>
       <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/auth' element={<AuthPage></AuthPage>}></Route>
        <Route path='/profile' element={<ProfileSection></ProfileSection>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
