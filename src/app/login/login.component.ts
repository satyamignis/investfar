import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fileName: string;
  filePreview: string;
  preloadimg:any;
  loginSuccess:any;
  loginData:any={email:'',password:'',deviceType: 'Web', serviceKey: 'U2kaw394fckxegsmretk', fcmToken: 'c81e728d9d4c2f636f067f89cc14862c'};
  signupData:any={};

  constructor(public api:ApiService) { }

  ngOnInit() {
	   window.scrollTo(0, 0);
     this.preloadimg=true;
     setInterval(() => {  
         this.preloadimg=false;
     }, 1000);
  }

  onFileChanged(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        reader.result.split(',')[1];
        this.fileName = file.name + " " + file.type;
        this.filePreview = 'data:image/png' + ';base64,' + reader.result.split(',')[1];
        console.log(this.filePreview);
      };
    }
  }

  doLogin(){
        this.api.postData('login',this.loginData).subscribe((response: {}) => {
          // var userInfo = response.data[0];
          // if(userId){
          //    localStorage.setItem("userInfo", userInfo);
          // };
        })
  

}
}
