import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AllUsersComponent } from './all-users/all-users.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {AuthInterceptor} from './auth.interceptor';

@NgModule({
  declarations: [
@@ -45,10 +44,14 @@ import { HttpClientModule } from '@angular/common/http';
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
