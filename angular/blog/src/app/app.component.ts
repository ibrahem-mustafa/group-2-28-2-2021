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

  toggleState() {
    this.isAdmin = !this.isAdmin;
    this.disabled = !this.disabled;
  }
}
