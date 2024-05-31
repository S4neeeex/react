import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('sent');

  return (
    <div className="container">
      <div className="tabs">
        <Tab label="Отправленные" isActive={activeTab === 'sent'} onClick={() => setActiveTab('sent')} />
        <Tab label="Входящие" isActive={activeTab === 'inbox'} onClick={() => setActiveTab('inbox')} />
        <Tab label="Новый документ" isActive={activeTab === 'new-document'} onClick={() => setActiveTab('new-document')} />
        <Tab label="Удалённый" isActive={activeTab === 'deleted'} onClick={() => setActiveTab('deleted')} />
      </div>
      <TabContent isActive={activeTab === 'sent'}>
        <h2>Отправленные</h2>
        <p>Здесь будут отображаться отправленные документы.</p>
      </TabContent>
      <TabContent isActive={activeTab === 'inbox'}>
        <h2>Входящие</h2>
        <p>Здесь будут отображаться входящие документы.</p>
      </TabContent>
      <TabContent isActive={activeTab === 'new-document'}>
        <h2>Новый документ</h2>
        <NewDocumentForm />
      </TabContent>
      <TabContent isActive={activeTab === 'deleted'}>
        <h2>Удалённые</h2>
        <p>Здесь будут отображаться удалённые документы.</p>
      </TabContent>
    </div>
  );
};

const Tab = ({ label, isActive, onClick }) => (
  <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    {label}
  </div>
);

const TabContent = ({ isActive, children }) => (
  <div className={`tab-content ${isActive ? 'active' : ''}`}>
    {children}
  </div>
);

const NewDocumentForm = () => (
  <div className="new-document-form">
    <form>
      <label htmlFor="document-title">Название документа:</label>
      <input type="text" id="document-title" name="document-title" required />
      <br />
      <select name="users">
        <option value="us1">Пользователь 1</option>
        <option value="us2">Пользователь 2</option>
        <option value="us3">Пользователь 3</option>
        <option value="us4">Пользователь 4</option>
      </select>
      <br />
      <input type="file" id="file-upload" name="file-upload" />
      <br />
      <button type="submit">Отправить</button>
    </form>
  </div>
);

export default App;
