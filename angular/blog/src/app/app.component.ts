import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})




export class AppComponent {
  title: string = 'Hello From Angular';
  userName: string = 'Ibrahem Mustafa';
  classList: string = 'header main';

  isAdmin = true;

  inputPlaceholder: string = this.isAdmin ? 'Type Anything' : 'Go away';

  disabled: boolean = true;

  inputType: string = 'text';

  elementStyle: string = 'color: red; font-size: 15px';

  user = { name: 'ahmed', age: 30 }

  date = new Date();

  getUserName(): string {
    return this.isAdmin ? 'admin' : 'publisher';
  }

  isDisabled(): boolean {
    return this.disabled;
  }

  divClasses(): Record<string, boolean> {
    return {
      main: true,
      red: this.isAdmin,
      green: !this.isAdmin,
    };
  }

  divStyle(): Record<string, string> {
    return {
      color: this.isAdmin ? 'red' : this.disabled ? 'green' : 'blue',
      fontSize: this.isAdmin ? '39px' : '21px',
    };
  }

  sayHello() {
    console.log('hello');
  }

  printValue(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    // .addEventListener('click', (event) => {})
  }

  toggleState() {
    this.isAdmin = !this.isAdmin;
    this.disabled = !this.disabled;
  }

  printInput(input: HTMLElement) {
    // console.log(input);
    console.log(this.email)
    this.email = 'changed@gmail.com'
  }

  email = 'ibrahem@gmail.com';

  updateInputValue(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    this.email = target.value;
  };

  showArticle: boolean = true;

  users = [
    {id: 1, name: 'ibrahem', age: 30},
    {id: 2, name: 'mohammed', age: 18},
    {id: 3, name: 'ali', age: 21},
  ]

  updateAge(data: any) {
    console.log(data)
    const user = this.users.find(user => user.id == Number(data.id))!
    console.log(user)
    user.name = data.name
  }

  print() {
    console.log(this.users)
  }
}

