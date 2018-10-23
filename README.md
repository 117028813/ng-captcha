# NgCaptcha

> [中文文档](https://github.com/117028813/ng-captcha/blob/master/README-CN.md)

A pure front-end angular captcha module.

## Usage

### Installation

```
npm install --save ng-captcha
```

### Import module

app.module.ts

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { CaptchaModule } from 'ng-captcha';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Basic

app.component.html

```html
<input [(ngModel)]="inputCode">
<captcha width="200" height="70" (generateCode)="onGenerateCode($event)"></captcha>
<button (click)="verify()">Verify</button>
```

app.component.ts

```ts
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
```

## API

Property | Description | Type | Default
--- | --- | --- | ---
`width` | Captcha Width | number | `100`
`height` | Captcha height | number | `50`
`(generateCode)` | The callback function that is triggered when the captcha changes, when component init or click can trigger. | `EventEmitter<string>` | -