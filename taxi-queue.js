function TaxiQueue(passengers,taxis) {

	let passengerQueue = passengers || 0 ;
	let taxisQueue = taxis || 0 ;

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
		if(passengerQueue>=12){
			if(taxisQueue > 0 ){
				passengerQueue -=12;
				taxisQueue--;
			}else{
				return "not enough taxis" ;
			}
		}else{
			return "taxi  not full" ;
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