import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    this.http.get('/api/isin',{
      headers:{
        Authorization: "Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4IiwibmJmIjoxNzA4NDk1Mjk1LCJleHAiOjE3MDg1ODE2OTUsImlhdCI6MTcwODQ5NTI5NSwiaXNzIjoiRkFQQSIsInJvbGUiOiJBRE1JTiIsInBlcm1pc3Npb24iOjYzfQ.Np5my5HuYtS9M8ElP1i9jM0VUADIRCx5XrLPvBLyJZIq-fR6rlBnaBSfot4YszbCjTqq57uu5myiUlt7ECfmX1Au_-hAOsIVQc801-XdRnbAp2T9aeOCtVAVHfEXbl4c3qSRwJRMdW6TfbnerJvwdIJ798nNb8eDGA8xkeKw2MUiWmnUG5T1" +
          "CoW1GnEqC8Y3LjAgJ19jRq2qf_8WCP68xW9BHjW6QDrjGaWgrL14YagYb4cPNzMP0v0-1_XD-" +
          "V3KaR48JCgIGa1RUQ9JBHJ6Oc8QP4LAifQs618dDAE7LE8sKGBjB_bQc_ozQI3YpY8WV-_PtGlADkxv8iOo5F5MBQ"
      }
    }).subscribe(data=>{
      console.log(data)
    },error => {
      console.log(error)
    })
  }
}
