import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  code
  inputCode

  onGenerateCode(code) {
    this.code = code
  }

  verify() {
    if (this.code === this.inputCode) {
      alert('Verify success')
    } else {
      alert('Verify faild')
      this.inputCode = undefined
    }
  }
}
