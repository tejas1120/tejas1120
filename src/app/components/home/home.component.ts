import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   productList:products[]=[];
  filterProductlist:products[]=[];
  constructor(private httpservice:HttpService) { }

  ngOnInit(): void {
    this.getProductdetails()
  }
  getProductdetails(){
   this.httpservice.getData("productsitems").subscribe((el:any)=>{
    this.productList=el
    this.filterProducts('all');
    console.log("product-list",this.productList)
   }, (error)=>{
    console.log(error)
   })
  }
 filterProducts(category:any){
  if(category!="all"){
    this.filterProductlist=this.productList.filter((el=>(el.category==category)));
  }
  else{
   this.filterProductlist=this.productList
  }
 } 
}
