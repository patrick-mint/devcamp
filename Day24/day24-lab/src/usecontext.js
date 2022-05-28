import React, { useState, createContext, useContext } from 'react'

let ProfileContext = createContext();

function ProfileContextProvider(props) {
  let [firstname, setFirstName] = useState('Steve');
  let [lastname, setLastname] = useState('Roger');
  let [nickname, setNickname] = useState('Cap');
  let setName = (firstname, lastname, nickname) => { setFirstName(firstname); setLastname(lastname); setNickname(nickname); };
  return <ProfileContext.Provider value={{ firstname, lastname, nickname, setName }}>{props.children}</ProfileContext.Provider>;
}

function InformationPage() {
  let profile = useContext(ProfileContext);
  return <><h1>Profile</h1><h3>First Name: {profile.firstname}</h3><h3>Last Name: {profile.lastname}</h3><h3>Nick Name: {profile.nickname}</h3>
  </>
}


function ChangeValuePage() {
  let profile = useContext(ProfileContext);
  return <input type='button' value='Set Ironman' onClick={() => profile.setName('Tony', 'Stark', 'Richie')} />
}

function App() {
  return (
    <ProfileContextProvider>
      <InformationPage />
      <ChangeValuePage />
    </ProfileContextProvider>
  );
}

export default App;
