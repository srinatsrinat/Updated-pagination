
var message = document.createElement('div')
message.innerHTML= "<b>USER DETAILS</b>"
document.body.append(message)


var dis = document.createElement('div')
dis.setAttribute('style','height:100px;border: 1px solid black')




var request = new XMLHttpRequest()


request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)


request.send()


request.onload=function(){
    var data = JSON.parse(this.response)
    
    var buttonArr = document.createElement('div')

    var buttonArr1 = document.createElement('div')

    var btnPrev = document.createElement("button")
    btnPrev.type = "btn" 
    btnPrev.innerHTML= "Prev"
    btnPrev.setAttribute('onClick','GoBack(this)')
    buttonArr1.append(btnPrev)
    buttonArr1.append(' ') 

    

    var btnNext = document.createElement("button")
        btnNext.type = "btn" 
        btnNext.innerHTML= "Next"
        btnNext.setAttribute('onClick','GoTo(this)')
        buttonArr1.append(btnNext)
        buttonArr1.append(' ')  

       
    

    for(i=1;i<=data.length;i++)
    {   
        var a = document.createElement("button")
        a.type = "btn" 
        a.innerHTML= i
        a.value= i
        a.setAttribute('onClick','display(this)')
        buttonArr.append(a)
        buttonArr.append(' ')   
    }   

    
    document.body.append(buttonArr1)
    
    document.body.append(dis)
    
    document.body.append(buttonArr) 

    

    
}


var val = ''
dis.innerHTML='Navigate using prev|next and/or any other button below.'


function display(t){
    
   
   
     val = t.value

     request.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", true)
     request.send()
     request.onload=function(){   
     var newData = JSON.parse(this.response)

    
     
     while(dis.firstChild)
         dis.removeChild(dis.firstChild)
        
     
     var table = document.createElement('table') 
                table.style.border="1px solid black"
                
                dis.append(table)
              

     newData.map((element)=> {
         if(element["id"]==val)
         {
           var a = Object.keys(element)
           var b = Object.values(element)

        for(j=0;j<a.length;j++)
           {

            
            
            var tableRow = document.createElement('tr')  
                tableRow.setAttribute('style','border:1px solid black')  
         
            var td = document.createElement('td')
                td.setAttribute('style','border:1px solid black')  
                tableRow.append(td)   
                td.innerHTML=a[j]      

            var td = document.createElement('td')
                td.setAttribute('style','border:1px solid black') 
                tableRow.append(td)
                td.innerHTML=b[j]
                table.append(tableRow) 
        
           } 
          }
     // console.log(val)
        })
      }   
   }

   

   function GoTo(t){
    
    
   val ++
    

    request.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", true)
    request.send()
    request.onload=function(){   
    var newData = JSON.parse(this.response)

    if(val>100)
    {
        
        dis.innerHTML="no user above id 100. Click prev to go to user id 100 and below or click directly on any other number below"
        val = 101
    }
    else{
   
    while(dis.firstChild)
        dis.removeChild(dis.firstChild)
               
       
            
    var table = document.createElement('table') 
               table.style.border="1px solid black"
               
               dis.append(table)
             

    newData.map((element)=> {


        if(element["id"]==val)
        {
          var a = Object.keys(element)
          var b = Object.values(element)

       for(j=0;j<a.length;j++)
          {

           
           
           var tableRow = document.createElement('tr')  
               tableRow.setAttribute('style','border:1px solid black')  
        
           var td = document.createElement('td')
               td.setAttribute('style','border:1px solid black')  
               tableRow.append(td)   
               td.innerHTML=a[j]      

           var td = document.createElement('td')
               td.setAttribute('style','border:1px solid black') 
               tableRow.append(td)
               td.innerHTML=b[j]
               table.append(tableRow) 
       
          } 
         }
        // console.log(val)
       })
    }
     }   
  }



  function GoBack(t){


    val --
     
 
     request.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", true)
     request.send()
     request.onload=function(){   
     var newData = JSON.parse(this.response)
        
     if(val<1)
     {
         
         dis.innerHTML="no user below id 1. Click next to go to user id 1 and above or click directly on any other number below"
         val = 0
     }
     else{
    
     
     while(dis.firstChild)
         dis.removeChild(dis.firstChild)

    
     
     var table = document.createElement('table') 
                table.style.border="1px solid black"
                
                dis.append(table)
              
   
     newData.map((element)=> {
 
 
         if(element["id"]==val)
         {
           var a = Object.keys(element)
           var b = Object.values(element)
 
        for(j=0;j<a.length;j++)
           {
 
            
            
            var tableRow = document.createElement('tr')  
                tableRow.setAttribute('style','border:1px solid black')  
         
            var td = document.createElement('td')
                td.setAttribute('style','border:1px solid black')  
                tableRow.append(td)   
                td.innerHTML=a[j]      
 
            var td = document.createElement('td')
                td.setAttribute('style','border:1px solid black') 
                tableRow.append(td)
                td.innerHTML=b[j]
                table.append(tableRow) 
        
           } 
          }
          //console.log(val)
        })
         
      }  } 
   }


