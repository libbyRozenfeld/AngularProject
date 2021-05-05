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
  


  ngOnInit(){
  this.initEmployees();
  }

  initEmployees(): void {
   // debugger;
    var dataObj =  JSON.stringify(data)
    const objKeys = Object.keys(dataObj);
    alert(objKeys);
    
    var i = 1;
   // alert(dataObj[i])
     
     // this.Employees.push({"LastName" : data[i].LastName, "FirstName": data[i].FirstName, "Status" : EmployeeStatus[Number(data[i].Status)],"Age": Number(data[i].Age)}) ;
     // this.Employees.push({"LastName" : dataObj[i].LastName, "FirstName": data[i].FirstName, "Status" : EmployeeStatus[Number(data[i].Status)],"Age": Number(data[1].Age)}) ;
      this.Employees.push({"LastName" : data[2].LastName, "FirstName": data[2].FirstName, "Status" : EmployeeStatus[Number(data[2].Status)],"Age": Number(data[2].Age)}) ;
      this.Employees.push({"LastName" : data[3].LastName, "FirstName": data[3].FirstName, "Status" : EmployeeStatus[Number(data[3].Status)],"Age": Number(data[3].Age)}) ;
      this.Employees.push({"LastName" : data[4].LastName, "FirstName": data[4].FirstName, "Status" : EmployeeStatus[Number(data[4].Status)],"Age": Number(data[4].Age)}) ;
      // }
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




