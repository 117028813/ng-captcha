# NgCaptcha

一个前端的angular验证码组件。

## 使用方法

### 安装

```
npm install --save ng-captcha
```

### 引入组件

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

### 基本示例

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

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
`width` | 验证码宽度 | number | `100`
`height` | 验证码高度 | number | `50`
`(generateCode)` | 当验证码发生改变的回调函数，组件初始化或者点击验证码都会触发改方法 | `EventEmitter<string>` | -