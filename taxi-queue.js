function TaxiQueue() {

	let passengerQueue = 0 ;
	let taxisQueue = 0 ;

	function joinQueue() {
		passengerQueue++;
	}

	function leaveQueue() {
		if(passengerQueue>=1){
			passengerQueue--;
		}
	}

	function queueLength() {
		return passengerQueue;
	}

	

	function joinTaxiQueue() {
		taxisQueue++;
	}

	function taxiDepart(){
		if(passengerQueue>=12 && taxisQueue > 0 ){
			passengerQueue -=12;
			taxisQueue--;
		}
	}

	function taxiQueueLength() {
		return taxisQueue ;
	}



	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}