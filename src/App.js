// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import UserData from './components/UserData';
import Header from './components/Header';
import Sidebar from './components/sidebar'
import FormModal from './components/FormModal'; // Update the path


function App() {
  return (
    <div>
      <Header />
      <FormModal />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className='col py-3'>
            <main className="jsutify-content-center">
              <div className="album py-5 bg-body-tertiary" style={{backgroundColor:"blue"}}>
                <UserData />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default App;
