import { MyRoutes } from './MyRoutes';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './styles/App.scss';

export function App() {
  return (
    <>
      <Header />
      <MyRoutes />
      <Footer />
    </>
  )
}
