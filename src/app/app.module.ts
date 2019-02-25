import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeDetailsComponent,
    EmployeeUpdateComponent,
    EmployeesListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-project-demo')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
