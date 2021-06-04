
// Empty array to accumulate all objects inside class Location

var locArray:Array<cityLocation>=[];


// ===============================LOCATION class =========================
interface locationInterface{
    locationName:string;
    streetName:string;
    streetNo?:number;
    image?:string;
    dateVisit:string;
    timeVisit:string;
}

class cityLocation implements locationInterface{
    locationName;
    streetName;
    streetNo;
    image;
    dateVisit;
    timeVisit;
    constructor	(locName,strName,strNo,locImage,dateVisit,timeVisit){
        this.locationName=locName;
        this.streetName=strName;
        this.streetNo=strNo;
        this.image=locImage;
        this.timeVisit=timeVisit;
        this.dateVisit=dateVisit;
        locArray.push(this);
        // console.table(this)
    }
    
    locDisplay(){
        return ` 
        <div class=" col-lg-3 col-md-6 col-sm-1 px-1 box-height mb-2 mb-lg-0 al shadow-sm p-3 mb-5 bg-body rounded">

            <p class=" text-center px-2 h4"> ${this.locationName}</p>
            <p class="text-center">  ${this.streetName}  ${this.streetNo} </p>
            
            <img class="rounded mx-auto d-none d-md-flex " src="${this.image}" alt="${this.streetName}">

            <div class="col text-center ">
            <p class="text-center"> Date/time visited : ${this.dateVisit}  ${this.timeVisit} </p>
            </div>
        </div>
        `
    }

}

// ----------------- declaring variables ----------------------------

new cityLocation("Schönbrunn Palace",'Schönbrunner Schloßstraße', 47,'images\\image1.jpg','2020-09-15','')
new cityLocation('National Library','Josefsplatz',1,"images\\image2.jpg",'2021-01-04T05:47:03Z','')
new cityLocation('State Opera','Opernring', 2,"images\\image3.jpg",'2020-09-16T15:14:35Z','')
new cityLocation('Karlskirche','Kreuzherrengasse', 1,"images\\image4.jpg",'2021-03-11T21:16:56Z','')



// ---------------- Alloted space in HTML (location)  ------------------

let addressSpace=document.getElementById('location')



// ---------------- Loop for (location) items ------------------

for(let val of locArray){
    addressSpace.innerHTML+=val.locDisplay()
}

// ===============================RESTAURANT class ======================

// Empty array to accumulate all objects inside class Rest

var restArray:Array<Rest>=[];

class Rest extends cityLocation{
    cuisine: string;
    takeaway:string;
    telephone: number;
    constructor(locName,strName,strNo,locImage,dateVisit,timeVisit,cuisine,takeaway,telephone){
        super(locName,strName,strNo,locImage,dateVisit,timeVisit);
        this.cuisine=cuisine;
        this.takeaway=takeaway;
        this.telephone=telephone;
        restArray.push(this)
        // console.table(restArray)
    }
    restDisplay(){
        return ` 
        <div class=" col-lg-3 col-md-6 col-sm-1 px-1 box-height mb-2 mb-lg-0 al shadow-sm p-3 mb-5 bg-body rounded">
            <p class=" text-center px-2 h4"> ${this.locationName}</p>
            <p class="text-center">  ${this.streetName}  ${this.streetNo} </p>
            
            <img class="rounded mx-auto d-none d-md-flex" src="${this.image}"; alt="${this.locationName}">
            <div class="col text-center ">
                <p>Cuisine: ${this.cuisine}</p>
                <p>Takeaway: ${this.takeaway}</p>
                <p>Tel. number: ${this.telephone}</p>
            </div>
            <div class="col text-center ">
                <p class="text-center"> Date/time visited : ${this.dateVisit}  ${this.timeVisit} </p>
            </div>
        </div>
        `
    }
    
}




// ----------------- declaring variables ----------------------------

new Rest("Golden Dragon",'Währingerstrasse', 27,'images\\image5.jpg','2021-01-01T20:25:58Z','','chinese',"yes",676767)
new Rest("da Paolini",'Mariahilferstr.', 33,'images\\image6.jpg','2020-09-05T09:31:32Z','','Italian',"yes",235565)
new Rest("Bab ElHana",'Kärntnerstrasse', 55,'images\\image7.jpg','2020-06-03T17:55:05Z','','Arabic',"Yes",22233)
new Rest("Grinsteidl",'Michaelerplatz', 2,'images\\image8.jpg','2020-05-09T09:34:48Z','','Austrian',"No",99999)





// ------------------------ Location Loop -----------------------------


let restSpace=document.getElementById('rest')

for(let val of restArray){
    restSpace.innerHTML+=val.restDisplay()
}


// ===============================EVENTS class ======================

// Empty array to accumulate all objects inside class Event

var eventsArray:Array<Events>=[];

class Events extends cityLocation{
    eventDate: string;
    eventTime:string;
    ticketP: number;
    constructor(locName,strName,strNo,locImage,dateVisit,timeVisit,eventDate,eventTime,ticketP){
        super(locName,strName,strNo,locImage,dateVisit,timeVisit);
        this.eventDate=eventDate;
        this.eventTime=eventTime;
        this.ticketP=ticketP;
        eventsArray.push(this)
    
    }
    eventsDisplay(){
        return ` 
        <div class=" col-lg-3 col-md-6 col-sm-1 px-1 box-height mb-2 mb-lg-0 al shadow-sm p-3 mb-5 bg-body rounded">
            <p class=" text-center px-2 h4"> ${this.locationName}</p>
            <p class="text-center">  ${this.streetName}  ${this.streetNo} </p>
            
            <img class="rounded mx-auto d-none d-md-flex" src="${this.image}"; alt="${this.locationName}">
            <div class="col text-center ">
                <p>Date: ${this.eventDate}</p>
                <p>Time: ${this.eventTime}</p>
                <p>Price: € ${this.ticketP}</p>
            </div>
            <div class="col text-center ">
            <p class="text-center"> Date/time visited : ${this.dateVisit}  ${this.timeVisit} </p>
            </div>
        </div>
        `
    }
    
}




// ----------------- declaring variables ----------------------------

new Events("Donaufest",'Donauinsel', 1,'images\\image9.jpg','2021-01-11T21:16:23Z','','20.05.2019',"09:00",0)
new Events("Bon Jovi",'Stadthalle', 1,'images\\image10.jpg','2020-07-31T12:00:37Z','','22.04.2019',"20:00",120)
new Events("Mozart Ensamble",'Konzerthaus', 1,'images\\image11.jpg','2021-01-13T11:44:28Z','','19.10.2019',"19:00",150)
new Events("The Nutckracker",'Wieneroper', 1,'images\\image12.jpg','2020-06-13T22:31:56Z','','07.07.2019',"19:00",200)







// ------------------------ Events Loop -----------------------------


let eventsSpace=document.getElementById('events')

for(let val of eventsArray){
    eventsSpace.innerHTML+=val.eventsDisplay()
}


/* __________________SORT Ascending  ________________________*/
    
 function compareA(a, b){
         
         const dateA = Date.parse(a.dateVisit);
         const dateB = Date.parse(b.dateVisit);
        
        
         let comparison = 0;
         if (dateA > dateB) {
             comparison = 1;
         } else if (dateA < dateB) {
             comparison = -1;
         }
      
         return comparison;
     }
/* __________________SORT Descending  ________________________*/
    
 function compareD(a, b){
         
         const dateA = Date.parse(a.dateVisit);
         const dateB = Date.parse(b.dateVisit);
        
        
         let comparison = 0;
         if (dateA > dateB) {
             comparison = -1;
         } else if (dateA < dateB) {
             comparison = 1;
         }
      
         return comparison;
     }
    
// ---------- event listener function for both buttons /LOCATIONS --------------

 document.getElementById("ascend").addEventListener("click", sortCallA);
 document.getElementById("descend").addEventListener("click", sortCallD);



// ---------------- sort function (location) ------------------

var realLocArray:Array<cityLocation>=[];

//    extracting the real location list from the total list
for(let i=0; i<4;i++) {
    realLocArray[i]=locArray[i]
}

 function sortCallA(){
     //  call the sort function 
     const sortList=realLocArray.sort(compareA)
    //  empty space before re-render
     addressSpace.innerHTML=""
    //  fill the now empty space with sorted items
     for(let val of sortList){
          addressSpace.innerHTML+=val.locDisplay()
      }
 }
 function sortCallD(){
     const sortList=realLocArray.sort(compareD)
    //  empty space before re-render
     addressSpace.innerHTML=""
    //  fill the now empty space with sorted items
     for(let val of sortList){
          addressSpace.innerHTML+=val.locDisplay()
      }
 }


// ---------- event listener function for both buttons /Restaurants --------------

document.getElementById("ascend").addEventListener("click", sortCallRestA);
document.getElementById("descend").addEventListener("click", sortCallRestD);


// ---------------- sort function (Restaurants) ------------------

  function sortCallRestA(){
      const sortList=restArray.sort(compareA)
      console.table('Asc Restaurant -->'+sortList)
     //  empty space before re-render
      restSpace.innerHTML=""
     //  fill the now empty space with sorted items
     for(let val of sortList){
          restSpace.innerHTML+=val.locDisplay()
      }
 }
 function sortCallRestD(){
     const sortList=restArray.sort(compareD)
     console.table('Desc Restaurant -->'+sortList)
     //  empty space before re-render
      restSpace.innerHTML=""
     //  fill the now empty space with sorted items
      for(let val of sortList){
           restSpace.innerHTML+=val.locDisplay()
       }
  }


document.getElementById("ascend").addEventListener("click", sortCallEventsA);
document.getElementById("descend").addEventListener("click", sortCallEventsD);
// ---------------- sort function (Events) ------------------


  function sortCallEventsA(){
      const sortList=eventsArray.sort(compareA)
     //  empty space before re-render
      eventsSpace.innerHTML=""
     //  fill the now empty space with sorted items
     for(let val of sortList){
          eventsSpace.innerHTML+=val.locDisplay()
      }
 }
 function sortCallEventsD(){
     const sortList=eventsArray.sort(compareD)
     //  empty space before re-render
      eventsSpace.innerHTML=""
     //  fill the now empty space with sorted items
      for(let val of sortList){
           eventsSpace.innerHTML+=val.locDisplay()
       }
  }

