import React, { Component } from "react";
import { Label, FormPhone, Input, Button } from "./FormPhone.styled";

export class FormPhone extends Component {
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
              <FormPhone onSubmit={this.handleSubmit}>
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
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleNameChange}/>
                </Label>
                {/* Кнопка для додавання контакту */}
                <Button type="submit">
                  Add contact 
                </Button>
              </FormPhone>
            </div>
          );
     };
        
};


    