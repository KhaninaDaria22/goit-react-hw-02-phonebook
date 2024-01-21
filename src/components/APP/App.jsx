import { Component } from "react";
import Section from "components/Section/Section";
import {Container} from "./App.styled";
import  {ContactList}  from "components/ContactList/ContactList";
import { Phonebook } from "components/Phonebook/Phonebook";

class App extends Component {
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  };

addContact = (name, number) => {
  const {contacts} =this.state;
  const contact = {
    name,
    number,
  };
//перевіряємо чи є такй контак в потоці, якщо немає то додаємо
  const checkName = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  if(checkName) {
    alert(`${name} is already in contact`);
    return;
  }

  this.setState(({contacts}) =>({contact:[contact, ...contacts]}));
};

//метод для видалення контактів, який передамо в контакт ліст у якості пропсві, щоб видалити контакт

deleteContact = contactId => {
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }));
}

  render() {
    return(
      <Container>
        <Section title="Phonebook">
          <Phonebook onSubmit={this.addContact}></Phonebook>
        </Section>
        <Section title="Contacts">
          <ContactList onDeleteContact={this.deleteContact}></ContactList>
        </Section>
      </Container>
    )
  } 
}


export default App;





// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}

//     >
//       React homework template
//     </div>
//   );
// };

