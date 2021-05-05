import { Component,Input} from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import  *  as  data  from  './data.json';

enum EmployeeStatus{

  Permanent = 1,
  Temporary=2,
  Hourly = 3,
  Global = 4,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){
  
  }
  ngOnInit(){
   //console.log(data);
   //this.Employees.push({data[1].LastName }) 

   //(this.Employees[1].FirstName)
  // this.http.get('./data.json').subscribe(data => {
    //this.res = data;
  //});
 
  this.initEmployees();
  
  }

  initEmployees(): void {
   // for (var i = 0; i<5;i++) {
      //alert(i);
      this.Employees.push({"LastName" : data[0].LastName, "FirstName": data[0].FirstName, "Status" : EmployeeStatus[Number(data[0].Status)],"Age": Number(data[0].Age)}) ;
      this.Employees.push({"LastName" : data[1].LastName, "FirstName": data[1].FirstName, "Status" : EmployeeStatus[Number(data[1].Status)],"Age": Number(data[1].Age)}) ;
      this.Employees.push({"LastName" : data[2].LastName, "FirstName": data[2].FirstName, "Status" : EmployeeStatus[Number(data[2].Status)],"Age": Number(data[2].Age)}) ;
      this.Employees.push({"LastName" : data[3].LastName, "FirstName": data[3].FirstName, "Status" : EmployeeStatus[Number(data[3].Status)],"Age": Number(data[3].Age)}) ;
      this.Employees.push({"LastName" : data[4].LastName, "FirstName": data[4].FirstName, "Status" : EmployeeStatus[Number(data[4].Status)],"Age": Number(data[4].Age)}) ;
      // }
   
  }

  title = 'MATPASH';
 

  Employees=  [
  { "LastName": "aaa", "FirstName": "aaa", "Status" : EmployeeStatus[1], "Age":56  },
  { "LastName": "bbb", "FirstName": "bbb", "Status" : EmployeeStatus[2], "Age":72  },
  { "LastName": "ccc", "FirstName": "ccc", "Status" : EmployeeStatus[3], "Age":22  },
];
employeeStatus = [
  EmployeeStatus[1],EmployeeStatus[2],EmployeeStatus[3],EmployeeStatus[4]
];


LastName : string = "";
FirstName: string = "";
condition : boolean = true;
MinAge:number = 0 ;
MaxAge:number = 0 ;
Status : EmployeeStatus = 0 ;


}




