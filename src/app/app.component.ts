import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'quiz';
  public count=0
  public ques= [];
  public a=[];
  public b=[];
  public i=0;
  
  ngOnInit(){
  this.ques=  this.myQuestions
  }
  
  check(){
    // console.log(this.ques[0].answers)
    if(this.ques[this.i]){
     console.log(this.quiz.value)
     this.b.push(this.ques[this.i].correctAnswer)
     this.i++
    }
    else{
      console.log("Question IS over")
    }
    
  }
  onsubmit(){
    this.a.push(this.quiz.value)
  
  }
  quiz = new FormGroup({
    options:new FormControl('')
  
  })

  
result(){
  this.b.forEach((e,i)=>{
    if(this.a[i].options== this.b[i]){
      this.count++;
    }
    console.log(this.count)
    console.log(this.a[i].options)
  })
}











  
  
//JSON Data
  myQuestions= [
    {
      question: "Who invented JavaScript?",
      answers: [{
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      }],
      correctAnswer: "Brendan Eich"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: [
        {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
        }
      ],
      correctAnswer: "npm"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: [
        {
        a: "Angular",
        b: "ESLint",
        c: "RequireJS"
      }
    ],
      correctAnswer: "ESLint"
    }
  ];
}


