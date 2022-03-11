import './App.css';
import GroupDetail from './propSample/GroupDetail';
import UserDetail from './propSample/UserDetail';


function App() {

  const group = {
    name: 'Moonspel',
    year: 1992,
    detail: {
      albumCount:5
    }

  }
  return (
    <>
    <UserDetail userAddress="Mehmet Akif Caddesi" color="yellow" name="Pink" surname="Floyd" money={2000}></UserDetail>
      <GroupDetail group ={group}></GroupDetail>
      
    </>
  );
}

export default App;
