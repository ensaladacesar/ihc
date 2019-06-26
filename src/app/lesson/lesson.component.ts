import { Component, OnInit } from '@angular/core';
import { NgxGistRunkitModule } from 'ngx-gist-runkit'


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lesson1(){
    let asnw = "Primero<br>Segundo<br>Tercero<br>";
    document.getElementById('testCode1').innerHTML = asnw;
  }

  lesson2(){
    let asnw = "Primero<br>Tercero<br>Segundo<br>";
    document.getElementById('testCode2').innerHTML = asnw;
  }

  lesson3(){
    let asnw = "START execution with value = 0<br>START execution with value = 1<br>START execution with value = 2<br>START execution with value = 3<br>START execution with value = 4<br>START execution with value = 5<br>START execution with value = 6<br>START execution with value = 7<br>START execution with value = 8<br>START execution with value = 9<br>COMPLETED ?<br>=> undefined<br>END execution with value = 5 and result = 25<br>END execution with value = 8 and result = 64<br>END execution with value = 6 and result = 36<br>END execution with value = 9 and result = 81<br>END execution with value = 1 and result = 1<br>END execution with value = 0 and result = 0<br>END execution with value = 3 and result = 9<br>END execution with value = 4 and result = 16<br>END execution with value = 2 and result = 4<br>END execution with value = 7 and result = 49<br>";
    document.getElementById('testCode3').innerHTML = asnw;
  }
}
