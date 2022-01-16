const getSleepHours = day => {
    switch(day) {
    case 'monday':
    return 10;
    break;
   case 'tuesday':
    return 10;
    break;
    case 'wednesday':
    return 10;
    break;
    case 'thrusday':
    return 10;
    break;
    case 'friday':
    return 10;
    break;
    case 'saturday':
    return 2;
    break;
    case 'sunday':
    return 12;
    break;
    
    default:
    return 'error'
    }
   };
   
   const getActualSleepHours = () => 
   getSleepHours('monday') +
   getSleepHours('tuesday') +
   getSleepHours('wednesday') +
   getSleepHours('thrusday') +
   getSleepHours('friday') +
   getSleepHours('saturday') +
   getSleepHours('sunday')
   
   console.log(getSleepHours('monday'))
   console.log(getActualSleepHours())
   
   const getIdealSleepHours = () => {
     const idealHours = 8;
     return idealHours * 7;
   };
   
   const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours();
   
     if (actualSleepHours === idealSleepHours) {
       console.log (" you got the perfect amount of sleep")
     } else if ( actualSleepHours > idealSleepHours){
       console.log (" you've got " + (actualSleepHours - idealSleepHours) + " more hours of sleep this week")
     } else if ( actualSleepHours < idealSleepHours) {
       console.log (" you should get some rest because you have slept " + ( idealSleepHours - actualSleepHours ) + " hours less than you should this week ")
     } else {
       console.log("Error something went wrong check your code!")
     }
   };
   
   calculateSleepDebt();
   