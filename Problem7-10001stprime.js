function findPrimeNumber(n){
    
    var c = 1, 
    nPrime = 2, 
    i = 3; 
   
    function isPrime(k){ 
      for( var j = 2; j < k; j++){
        if( k % j === 0 ){ 
            return false; } 
      }
      return true;
    
    }
    
    while(c < n){ 
      if( isPrime(i) ) {  
        c++; 
        nPrime = i; 
      }
      i++; 
    } 
    return nPrime;
  }

console.log(findPrimeNumber(n))
