import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-home-inicial',
  templateUrl: './home-inicial.component.html',
  styleUrls: ['./home-inicial.component.css']
})
export class HomeInicialComponent implements OnInit {
  

  // http://localhost:3000
  // https://back-sta.herokuapp.com



  baseurl:string = 'https://back-sta.herokuapp.com/files/';

  readAvisos:any
  display1:string = '';
  animationduration1:string ='0s';
  animationname1:string = ''
  display2:string = 'none';
  display3:string = 'none';
  display4:string = 'none';
  enable:boolean = false
  displayModal:string = 'none'
  img:string = ''
  img1 = '';
  img2 = '';
  img3 = '';
  img4 = '';
  img5 = '';
  img6 = '';

  constructor(private service:AppService) { }

  changeAlert1(){

    this.animationduration1 = '3s'
    this.animationname1 = 'back1'
    this.display1 =''
    this.display2 = 'none'
    this.display3 = 'none'
    this.display4 = 'none'
    this.enable = true
}

changeAlert12(){
  this.animationduration1 = '3s';
  this.animationname1= 'go2'
  this.display2 = ''
  this.display1 = 'none'
  this.display3 = 'none'
  this.display4 = 'none'
  this.enable = true

}

changeAlert13(){

  this.animationduration1 = '3s';
  this.animationname1 = 'go3'
  this.display3 = ''
  this.display1 = 'none'
  this.display2 = 'none'
  this.display4 = 'none'
  this.enable = true

}


changeAlert14(){

  this.animationduration1 = '3s';
  this.animationname1 = 'go4'
  this.display4 = ''
  this.display1 = 'none'
  this.display2 = 'none'
  this.display3 = 'none'
  this.enable = true

}

refresh(){
  location.reload()
}

openModal(img:string){
  this.img = this.baseurl + img 
  this.displayModal = ''
}

closeModal(){
  this.displayModal = 'none'
}

  ngOnInit(): void {

    
  this.service.readAvisos().subscribe((res)=>{
      this.readAvisos = res;

      console.log(this.readAvisos)
     
      this.img1 = this.readAvisos[0].filename;
      this.img2 = this.readAvisos[1].filename;
      this.img3 = this.readAvisos[2].filename;
      this.img4 = this.readAvisos[3].filename;
      this.img5 = this.readAvisos[4].filename;
      this.img6 = this.readAvisos[5].filename;
  })
  
    if(this.enable == false){
   
    setTimeout(()=>{
      this.display2 = ''

      //alert1 
  
      this.animationduration1 = '3s';
      this.animationname1= 'go1'
      this.display1 = 'none'

      
      setTimeout(()=>{
        this.animationduration1 = '3s';
        this.animationname1 = 'go1'
        this.display3 = ''
        this.display1 = 'none'
        this.display2 = 'none'
        this.display4 = 'none'



        setTimeout(()=>{
    
          this.animationduration1 = '3s';
          this.animationname1 = 'go4';
          this.display4 = '';
          this.display1 = 'none';
          this.display2 = 'none';
          this.display3 = 'none'; 
   
          setTimeout(()=>{
            this.animationduration1 = '3s'
            this.animationname1 = 'back1'
            this.display2 = 'none'
            this.display3 ='none'
            this.display4 ='none'
            this.display1 =''

            setTimeout(()=>{
              this.ngOnInit();
            },3000)
        
         
           },5000)

       
        },5000)
     
       
      },5000)

    },5000)

    }


  }




}
