import React, { Component } from "react";
import { Label, Form, Input, Button } from "./Phonebook.styled";

export class Phonebook extends Component {
    state = {
        name: '',
        numver: '',
    };
//відповідає за оновлення стану 
    handleNameChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    };
//викликається під час віправлення форми 
    handleSubmit = e => {
        e.preventDefault();
//пропс, який передається формі для виклику під час сабміту
        this.props.onSubmit(this.state);

        this.reset()
        console.log("Form", this.state);
    };
//очищення форми після відправик даних 
    reset =() => {
        this.setState({name: '', number: ''});
    };


//рендер вихідної розмітки форми
    render() {
//деструктуризація 
      const {name, number} = this.state;
        return (
            <div>
              {/* Форма для введення імені контакту */}
              <Form onSubmit={this.handleSubmit}>
                <Label>
                  Name
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleNameChange}
                    required
                  />
                </Label>
                <Label>
                  Number
                  <Input
                    type="tel"
                    name="number"
                    value={number}
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleNameChange}/>
                </Label>
                {/* Кнопка для додавання контакту */}
                <Button type="submit">
                  Add contact 
                </Button>
              </Form>
            </div>
          );
     };
        
};


    