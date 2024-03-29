import { AppLayoutModule } from './layout/app.layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './shared/spinner/spinner.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from "@angular/common/http";
import { ConfigureModule } from './configure/configure.module';
import { NumberModule } from './configure/steps/number/number.module';
import { QRCodeModule } from './configure/steps/qrcode/qrcode.module';
import { AdminactionModule } from './adminactions/adminactions.module';
import { SessionTimeComponent } from './shared/sessiontime/sessiontime.component';
import { ButtonModule } from 'primeng/button';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    SessionTimeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    ConfigureModule,
    NumberModule,
    QRCodeModule,
    AdminactionModule,
    ButtonModule,

    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: ()=>{ return localStorage.getItem('token')},
        allowedDomains: [environment.userApidoman,environment.appApiDoman],
        disallowedRoutes: [""],
      },
    }),

  ],
  providers: [
   {provide:HTTP_INTERCEPTORS,useClass:SpinnerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
