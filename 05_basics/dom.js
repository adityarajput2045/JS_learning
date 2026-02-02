//Run all the code of this page in web console
console.log(window)
console.log(document)
console.log(document.baseURI);
console.log(document.links[2]);
document.getElementById('firstHeading')
document.getElementById('firstHeading').innerHTML = "<h1>Data Deiver</h1>"

document.getElementById('heading').className

document.getElementById('heading').getAttribute('id')

document.getElementById('heading').getAttribute('class')

document.getElementById('heading').setAttribute('class','test') // Not Work

document.getElementById('heading').setAttribute('class','test heading') // Work

const header = document.getElementById('heading')
//undefined

header
//<h1 id=​"heading" class=​"test">​DOM Learning with Data Deiver​</h1>​

header.style.backgroundColor = "green"

header.style,padding = "15px"

header.style.padding = '15px'

header.style.borderRadius = "5px"

header.textContent
//'DOM Learning with Data Deiver' 

header.innerHTML
//'DOM Learning with Data Deiver' <span style="display:none">Test text</span>  // It should we given all the tex inside the h1 and it also given the other div like span tag as a result

header.innerText
//'DOM Learning with Data Deiver' Test text // It can give the whole body content whether it should be hidden or not

document.querySelector('h1')  // It will we give first number of h1

document.querySelector('#heading') // It will select id

document.querySelector('.heading') // It will selct the class

document.querySelector('input[type="password"]')

{/* 
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul> 
*/}
//Here you have to select one and convert into green

document.querySelector('ul')

const myUl = document.querySelector('ul')
const turnGreen = myUl.querySelector('li')
turnGreen.style.backgroundColor = "green"
turnGreen.innerHTML = "Five"  // it will we replace one into five

//QuerySelectorAll

document.querySelectorAll(li)

const tempLiList = document.querySelectorAll(li)

tempLiList  // node list provide

tempLiList.style.color = 'green' // It will we provide error

tempLiList[0].style.color = "green"  // one text color covert into green
tempLiList[1].style.color = "black"  // one text color covert into black
tempLiList[2].style.color = "red"    // one text color covert into red

tempLiList.forEach(function (l){
    l.style.backgroundColor = 'green'
})

//Other way

const tempClassList = document.getElementsByClassName('list-item')
tempClassList.forEach(function(li){
    console.log(li)
}) // It will throw errror
//First you have to conver itno the array

Array.from(tempClassList)
const convertedArray = Array.from(tempClassList)

convertedArray.forEach(function(li){
    li.style.backgroundColor = 'orange'
})

