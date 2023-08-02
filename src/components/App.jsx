import { Component } from "react";

import { Wrapper, Title } from './App.styled'
import ListContact from "./ListContact/ListContact";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ListItem from "./ListContact/ListItem";

class App extends Component{
  state = {
  contacts:[
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  handlerAddContact = (newContact) => { // з ContactForm приймаємо данні про новий контакт
    if (this.state.contacts !== '') {
      if (this.state.contacts.some(el => el.name.toLowerCase().includes(newContact.name.toLowerCase()))) { // якщо масив має така ім'я виводимо повідомлення
        alert(`${newContact.name} is alredy in contacs`);
        return
      }
    }
    this.setState((prevState) => ({ // від поточного стану 
      contacts: [...prevState.contacts, newContact], //розпилюємо в новий масив поточний стан + додаємо новий контакт
    }));
  }
   handleInputChange = (e) => {
    const name = e.target.name; // динамічне визначення назви поля
    this.setState({[name]:e.currentTarget.value})// інтуп залежить від state.name, при введенні прослуховуємо подію + записуємо нове значення в state 
  }
  handleDeleteContact = (contactId) => { //приймаємо ід елементу на який клікнули
    this.setState((prevState) => ({//пед попереднього стану
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)// викидуємо елемент ід якого співпадає, фільтрований масив відображається 
    }));
  }

  render() {
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handlerAddContact} />
        <Title>Contact</Title>
        <Filter value={this.state.filter} handleInputChange={this.handleInputChange} />
        <ListContact>
          <ListItem data={this.state.contacts} filter={this.state.filter} handleDeleteContact={this.handleDeleteContact} />
        </ListContact>
      </Wrapper>
    )
  }
}
export default App;
//
