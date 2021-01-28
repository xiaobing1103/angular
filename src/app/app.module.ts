import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';
import { FormsModule} from '@angular/forms';
import { LcUppercasePipe } from './filter/lc-uppercase.pipe';
import { ChildComponent } from './view/child/child.component'
@NgModule({
  declarations: [AppComponent, NewsComponent, LcUppercasePipe, ChildComponent],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
