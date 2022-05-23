import './App.css';
import MainContent from './components/MainContent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

export default function App() {
  return (
    <div>
      <HeaderComponent />

      <div className="content">
        <MainContent />
      </div>

      <FooterComponent />
    </div>
  );
}
