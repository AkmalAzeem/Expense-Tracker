import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../Expenses.service';

@Component({
  selector: 'app-load-expenses-datata',
  templateUrl: './load-expenses-datata.component.html',
  styleUrls: ['./load-expenses-datata.component.scss']
})
export class LoadExpensesDatataComponent implements OnInit {

  expenses:Array<any> = [];
    constructor(private service: ExpensesService){
  }
  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
      this.service.loadAll()
    .subscribe(response=>{
      this.expenses = response;
    },error=>{ 
      console.log(error);  
      
    })
  }
  delete(id:string){
    if(confirm('are you sure ?')){
     this.service.delete(id)
    .then(response=>{
      this.expenses = response;
    }).catch(error=>{
      console.log(error);
    })
    }

  }
}
