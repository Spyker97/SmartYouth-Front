import { Component, AfterViewInit , ViewChild , ElementRef  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../services/auth/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/auth/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'
  ]
})
export class SignInComponent implements AfterViewInit {
  @ViewChild('myVideo') myVideo!: ElementRef;
  email: string | undefined;
  password: string | undefined;
  message : string | undefined; 
  loginForm: any;


  constructor(private userAuthService : UserAuthService , private router : Router ,
    private userService : UserService) { }
    isPlaying = false;
    ngAfterViewInit(): void {
      this.myVideo.nativeElement.play();


  }

  triggerClick() {
    
    console.log("hh")
}
  buttonClick() {
    console.log('Button clicked!');
  }


  login(loginForm:NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        if(response.jwtToken != null) {
          
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        //test set and get current user
        this.userAuthService.setCurrentUser(response.user);
        //end test
        const role = response.user.role;
        if(role=="ADMIN"){
          this.router.navigate(['/admin']);
        }else{
          this.router.navigate(['/home']);
         
        }
        }
      
      },
      (error) =>{
        console.log(error);
      }
    )
  }

   

  private play() {
    const video = document.getElementById('myVideo') as HTMLVideoElement;

    if (video) {
      video.play();
      this.isPlaying = true;
    }
  }
 
}
