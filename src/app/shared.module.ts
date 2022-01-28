import { CommonModule } from '@angular/common'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { MessageService } from 'primeng/api'
import { ToastModule } from 'primeng/toast'
import { AppRoutingModule } from './app-routing.module'
import { AssistantCoreBaseModule } from './components/generics/assistant-core-base/assistant-core-base.module'
import { DurationTimePipe } from './pipes/duration-time.pipe'

@NgModule({
   imports: [
      ToastModule,
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      AssistantCoreBaseModule,
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
         },
      }),
   ],
   declarations: [DurationTimePipe],
   exports: [
      ToastModule,
      CommonModule,
      BrowserModule,
      DurationTimePipe,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      AssistantCoreBaseModule,
      TranslateModule,
   ],
   providers: [MessageService],
})
export class SharedModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http)
}
