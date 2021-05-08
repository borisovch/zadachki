let inp1=document.querySelector('#inp1')
// let inp2=document.querySelector('#inp2')
// let inp3=document.querySelector('#inp3')
let btn=document.querySelector('#btn')
let btn1=document.querySelector('#btn1')
let out=document.querySelector('.out')
let table=document.querySelector('#table')
let p=document.querySelector('p')
let select=document.querySelector('select')
// for(let elem of select){
  select.addEventListener('change',function(){
    inp1.value=this.value
  })
// }

// let arr=[1,2,3,4,5]
// let x=arr.map(val=>val*2)
// let c=arr.filter(val=>val%2==0)
// let d=arr.reduce((acc,val)=>acc+val,0)


// var f1 = function() {
// 	var already_used = [];
// 	return function() {
// 		var new_num = Math.floor(Math.random() * 100 + 1);
// 		for (var i = 0; i < already_used.length; i++) {
// 			if (already_used[i] == new_num) {return}
// 		};
//
// 		parag.innerHTML += new_num+', ';
// 		already_used.push(new_num);
// 	}
// }
// btn.addEventListener('click',f1())










 //     trs.forEach((tr, trKey) => {
 //         tr.querySelectorAll('td').forEach((td, tdKey) => {
 //             td.setAttribute('data-row',trKey + 1)
 //             td.setAttribute('data-col',tdKey +1)
 //         });
 //     });
 // }
 // two()
   // function three (){
     // for(let td of tds){
     //     td.addEventListener('click',function (){
     //     this.innerHTML='ред №'+this.getAttribute('data-row')+'<br>'+'клетка №'+this.getAttribute('data-col')
     //     })
     // }
     // }
     // three()

     // function two (){
     //     trs.forEach((tr, trKey) => {
     //         tr.querySelectorAll('td').forEach((td, tdKey) => {
     //             td.setAttribute('data-row',trKey + 1)
     //             td.setAttribute('data-col',tdKey + 1)
     //         });
     //     });
     // }
     // two()









//  let i=1
//  let j=1
//
// function one(){
//   for(let td of tds){
//     td.setAttribute('data-col',i++)
//     }
// }
// one()
// function two(){
//   for(let tr of trs){
//    tr.setAttribute('data-row',j++)
//   }
// }
// two()

// function three(){
//   for(let td of tds){
//   td.addEventListener('click',function(){
//     this.innerHTML='ред №'+this.getAttribute('data-row')+'<br>'+'клетка №'+this.getAttribute('data-col')
//
//   })
// }
// }
// three()


// var arrayToSearch=['a','s','a','s','e','a'];
// var couter={};
// arrayToSearch.forEach(function(e){
//   if(!couter[e]){
//     couter[e]=1;
//   }
//   else{
//     couter[e]+=1;
//   }
// });
// console.log(couter);


// var a=document.querySelector('#demo');
// a.innerHTML=couter;
// var aaa = [89, 1, 1, 2, 89];
// var counts = {};
// var final = [];
//
// for (var i = 0; i < a.length; i++) {
//     if(counts[a[i]] != undefined) {
//         counts[a[i]] = 1;
//     } else {
//         counts[a[i]]++;
//     }
// }
//
// for (var num in counts) {
//     final.push({'id': num, 'count': counts[num]});
// }
// console.log({'id': num, 'count': counts[num]});

//  function count() {
//     array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
//
//     array_elements.sort();
//
//     var current = null;
//     var cnt = 0;
//     for (var i = 0; i < array_elements.length; i++) {
//         if (array_elements[i] != current) {
//             if (cnt > 0) {
//                 document.write(current + ' comes --> ' + cnt + ' times<br>');
//             }
//             current = array_elements[i];
//             cnt = 1;
//         } else {
//             cnt++;
//         }
//     }
//     if (cnt > 0) {
//         document.write(current + ' comes --> ' + cnt + ' times');
//     }
//
// }
//
// count();
// var arr = [1,2,1,3,2,4,2,3,5,3,2,3];
// var map = arr.reduce(function(prev, cur) {
//   prev[cur] = (prev[cur] || 0) + 1;
//   return prev;
// }, {});
// // map is an associative array mapping the elements to their frequency:
// document.write(JSON.stringify(map));



// дубликати брои=====
// var arr = [1,2,3,2,1,3,2,4,2,3,5,3,2,3,1,23,11,22,11,22,11,23];
//   sortedArr = [];
//   count = 1;
// sortedArr = arr.sort(function(a,b){return a-b});
// for (var i = 0; i < sortedArr.length; i = i + count) {
//   count = 1;
//   for (var j = i + 1; j < sortedArr.length; j++) {
//     if (sortedArr[i] === sortedArr[j])
//       count++;
//   }
//   document.write(sortedArr[i] + " : " + count +'пъти'+ "<br>");
// }
// ===========================разбъркване на числа
// let out=document.querySelector('.out');

// out.innerHTML='<br>'+text1+'111'+'<br>';


// let out=document.querySelector('#demo')
// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// arr.forEach(function(elem) {
// 	out.innerHTML+=elem + '<br>';
// });


// ====================================
// const people=[
// 	{name:'vladi',age:25,budget:40000},
// 	{name:'elena',age:24,budget:3400},
// 	{name:'igor',age:15,budget:50000},
// 	{name:'mihail',age:32,budget:1800},
// 	{name:'vasilisa',age:14,budget:25000},
// 	{name:'viktoria',age:17,budget:2300},
// ]
// people.forEach(person=>console.log(person))
// const newPeople=people.map(person=>
// 	`${person.name}(${person.age})`
// )
// console.log(newPeople)
// const adults=people.filter(person=>person.age>=18)
// console.log(adults)

// const amount=people.reduce((total,person)=>total+person.budget,0)
// console.log(amount)

// const igor=people.find(person=>person.name==='igor')
// console.log(igor)


// create table
// let btnGet=document.querySelector('button');
// let myTable=document.querySelector('.table');
// let employees=[
// 	{name:'James' ,age:21,country:'United States'},
// 	{name:'Rony' ,age:31,country:'United Kindom'},
// 	{name:'Peter' ,age:58,country:'Canada'},
// 	{name:'Marks' ,age:20,country:'Spain'}
// ]
// let headers=['Name','Age','Country'];
// btnGet.addEventListener('click',()=>{
// let table=document.createElement('table');
// let headerRow=document.createElement('tr');
//
// headers.forEach(headerText=>{
// 	let header=document.createElement('th');
// 	let textNode=document.createTextNode('headerText');
// 	header.appendChild(textNode);
// 	headerRow.appendChild(header);
// });
// table.appendChild(headerRow);
// employees.forEach(emp=>{
// 	let row=document.createElement('tr');
// 	Object.values(emp).forEach(text=>{
// 		let cell=document.createElement('td');
// 		let textNode=document.createTextNode(text);
// 		cell.appendChild(textNode);
// 		row.appendChild(cell);
// 	})
// 	table.appendChild(row);
// });
// myTable.appendChild(table);
// });

// new create myTable
// let arr=[
//
//
// var table=document.querySelector('#table');
// // var arr=[['числа',2,3],[4,5,6],[7,8,9]];
// fillTable(table,arr);
// function fillTable(table,arr){
// 	for(var i=0;i<arr.length;i++){
// 		var tr=document.createElement('tr');
// 		for(var j=0;j<arr[i].length;j++){
//     var td=document.createElement('td');
// 		td.innerHTML=arr[i][j];
// 		tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}
// }


//setup our table array
// var ar = [
//   ["col1a", "col1b", "col1c"],
//   ["col2a", "col2b", "col2c"]
// ], table = document.querySelector('table tbody');
// var r = ar[0].map(function(col, i) {
//   return ar.map(function(row) {
//     return row[i];
//   });
// });
// r.forEach(function(e) {
//   table.innerHTML += '<tr><td>' + e[0] + '</td><td>' + e[1] + '</td></tr>'
// })
// =========================
// function one(num=5){
//
// }
// one()

// ========================
// let str=12345;
// let a=str.String()
// console.log(a)
// let result=0


// let arr=['пн','вт','ср','чт','пт','сб','нд']
// for(let i=0;i<arr.length;i++){
//   document.write(arr[i]+' ')
// }

// for(let i=0,j=0;i<=9;i++,j+=2){
//   console.log(i,j)

// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// let result={}
// for(let key in obj){
// 	if(obj[key]>=10&&obj[key]<=20){
// 		result[key]=obj[key]
// 	}
// }
// console.log(result);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let result={}
// for(let key in arr1){
// 	result[arr1[key]]=arr2[key]
// }
// console.log(result);



// function get1(){return 1}
// function get2(){return 2}
// function get3(){return 3}
// test(get1,get2,get3)
// function test(func1, func2,func3) {
//   alert(func1()+func2()+func3())
// }
// function test(arr,func){
//   for(let i=0;i<arr.length;i++){
//     arr[i]=func(arr[i])
//   }
//   return arr
// }
// let result=test([1,2,3,4],
// function(num){return num*num}
// )
// console.log(result);

// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	} else {
// 		return true;
// 	if (elem % 2 == 0) {
// 		return false;
// 	}
// });
// oooooooooooooooooo
// function addZero(num){
// 	if(num>=0&&num<=9){
// 		return '0'+num
// 	}
// 	else{return num}
// }
// setInterval(function(){
// 	let date=new Date
// 	sss.innerHTML=addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds())
// },1000)
//oooooooooooooooooo


//задача с инпут и редактиране
// for(let pe of pes){
// 	let span=document.createElement('span')
// 	let aaa=document.createElement('a')
// 	aaa.innerHTML='xxx'
// 	span.innerHTML=pe.innerHTML
// 	pe.innerHTML=''
// 	pe.appendChild(span)
// 	pe.appendChild(aaa)
//
// //a
// aaa.addEventListener('click',function(event){
// 	aaa.href=''
// 	remove(this)
// 	event.preventDefault()
// })
// //a
// 	span.addEventListener('click',function func(){
// 		let input=document.createElement('input')
// 		input.value=span.innerHTML
// 		span.appendChild(input)
// 			input.addEventListener('blur',function(){
// 				span.innerHTML=this.value
// 				span.addEventListener('click',func)
// 			})
// 			span.removeEventListener('click',func)
// 	})
// }
//задача с инпут и редактиране
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// for(let elem of employees){
// let li1=document.createElement('li')
// uls.appendChild(li1)
// let span=document.createElement('span')
// span.innerHTML=elem.name+':'+elem.age+':'+elem.salary
// li1.appendChild(span)
// let linc=document.createElement('a')
// linc.href=''
// linc.innerHTML='link'
// li1.appendChild(linc)
// 	linc.addEventListener('click',function(event){
//     li1.remove()
// 		event.preventDefault()
// 	})
//
//
// 	span.addEventListener('click',function test(){
// 		let input1=document.createElement('input')
// 		input1.value=this.innerHTML
//      span.innerHTML=''
// 		span.appendChild(input1)
// 		input1.addEventListener('blur',function(){
// 			span.innerHTML=this.value+'-'
// 			span.addEventListener('click',test)
// 		})
// 		span.removeEventListener('click',test)
// 	})
//
// }
//
//  let i1=document.querySelector('#a')
//   let i2=document.querySelector('#b')
// 	 let i3=document.querySelector('#c')
// 	 let btn55=document.querySelector('.btn55')
// 	 let empNew=[
// 	 	{name:i1.value,age:i2.value,salary:i3.value}
// 	 ]
//
// 	 for(let elem of empNew){
// 		 btn55.addEventListener('click',function(){
// 		 	let li1=document.createElement('li')
// 		 	li1.innerHTML=elem.name+':'+elem.age+':'+elem.salary
// 			let linc=document.createElement('a')
// 			linc.href=''
// 			linc.innerHTML='link'
// 			li1.appendChild(linc)
// 		 	uls.appendChild(li1)
// 		 })
// 	 }
