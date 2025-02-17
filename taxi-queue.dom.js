
let taxis = 0 ;
let passengers = 0;

if(localStorage["passengers"]){
    passengers = JSON.parse(localStorage["passengers"])
}

if(localStorage["taxis"]){
    taxis = JSON.parse(localStorage["taxis"])
}

const taxiQueue = TaxiQueue(passengers,taxis);

// ******* Counters ********
const passengerQueueCount = document.querySelector(".passenger_queue_count") ;
const taxiQueueCount = document.querySelector(".taxi_queue_count") ;
// ************************


// ********** Buttons *********
const taxiDepartBtn = document.querySelector(".depart") ;
const joinTaxiQueueBtn = document.querySelector(".join_taxi_queue") ;

const joinPassengerQueueBtn = document.querySelector(".join_queue") ;
const leavePassengerQueueBtn = document.querySelector(".leave_queue") ;
// ************************

// ************ Error Messages **********************
const noTaxis = document.querySelector(".no-taxis");
const notFull = document.querySelector(".not-full");
// *********************************************


passengerQueueCount.innerHTML = taxiQueue.queueLength() ;
taxiQueueCount.innerHTML = taxiQueue.taxiQueueLength() ;


// ************** Events *************

taxiDepartBtn.addEventListener("click",function(){

    if(taxiQueue.taxiDepart() === "taxi  not full" || taxiQueue.taxiDepart() === "not enough taxis" ){
        if(taxiQueue.taxiDepart() === "taxi  not full" ){
            notFull.style.display = "block";
            setTimeout(function(){
                notFull.style.display = "none";
            },3000)
        }
        if(taxiQueue.taxiDepart() === "not enough taxis"){
            noTaxis.style.display = "block";
            setTimeout(function(){
                noTaxis.style.display = "none";
            },3000)
        }
    }else{
        taxiQueueCount.innerHTML = taxiQueue.taxiQueueLength() ;
        localStorage["taxis"] = taxiQueue.taxiQueueLength();
        localStorage["passengers"] = taxiQueue.queueLength();
        passengerQueueCount.innerHTML = taxiQueue.queueLength() ;
    }
   
})
joinTaxiQueueBtn.addEventListener("click",function(){
    taxiQueue.joinTaxiQueue() ;
    taxiQueueCount.innerHTML = taxiQueue.taxiQueueLength() ;
    localStorage["taxis"] = taxiQueue.taxiQueueLength();
})


joinPassengerQueueBtn.addEventListener("click",function(){
    taxiQueue.joinQueue()
    passengerQueueCount.innerHTML = taxiQueue.queueLength() ;
    localStorage["passengers"] = taxiQueue.queueLength()

})
leavePassengerQueueBtn.addEventListener("click",function(){
    taxiQueue.leaveQueue()
    passengerQueueCount.innerHTML = taxiQueue.queueLength() ;
    localStorage["passengers"] = taxiQueue.queueLength()
})



