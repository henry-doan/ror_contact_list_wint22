import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Lists from './components/lists/Lists';
import MainNavbar from './components/shared/MainNavbar';
import Contacts from './components/contacts/Contacts';
import Comments from './components/comments/Comments';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/lists' element={<Lists />} />
      <Route path='/:listId/contacts' element={<Contacts />} />
      <Route path='/:contactId/comments' element={<Comments />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;
