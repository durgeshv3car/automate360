import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../src/home';
import AboutUs from '../src/about-us';
import Solutions from '../src/solutions';
import Contact from '../src/contact';
import Richmediaadvertising from '../src/rich-media-advertising';
import Programmaticdisplayvideo from '../src/programmatic-display-&-video';
import Connectedtvadvertising from '../src/connected-tv-(ctv)-advertising';
import Audiencedataactivation from '../src/audience-data-activation';
import Selfserveandmanagedserviceoptions from '../src/self-serve-and-managed-service-options';
import NoPage from './NoPage';
import BookDemo from './book-demo/page';
import Apidocumantationversion2 from './api-documantation-version2/page';
import Apidocumantationversion2mandarin from './api-documantation-version2-mandarin/page';

function App() {
  return (
    <div className="App">

<BrowserRouter>
 
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/rich-media-advertising" element={<Richmediaadvertising />} />
        <Route path="/programmatic-display-&-video" element={<Programmaticdisplayvideo />} />
        <Route path="/connected-tv-(ctv)-advertising" element={<Connectedtvadvertising />} />
        <Route path="/audience-data-activation" element={<Audiencedataactivation />} />
        <Route path="/self-serve-and-managed-service-options" element={<Selfserveandmanagedserviceoptions />} />
        <Route path="/apidocumantationversion2" element={<Apidocumantationversion2 />} />
        <Route path="/apidocumantationversion2mandarin" element={<Apidocumantationversion2mandarin />} />
        <Route path="/bookdemo" element={<BookDemo />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
