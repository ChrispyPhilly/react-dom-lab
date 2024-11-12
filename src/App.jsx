import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxholder: formData.boxholder,
      boxSize: formData.boxSize,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
          <Route
            path="/mailboxes/:mailboxId"
            element={<MailboxDetails mailboxes={mailboxes} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;