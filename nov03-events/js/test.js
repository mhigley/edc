switch (0) {
    case 1:
    case 2:
    case 3:
    default:
        //console.log(new Date().getDay());
        console.log("Looking forward to the Weekend");
        break; 
    case 4:
    case 5:
       console.log("Soon it is Weekend");
        break; 
    case 0:
    case 6:
       console.log("It is Weekend");
}

switch ('Apples') {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}

console.log("Is there anything else you'd like?");