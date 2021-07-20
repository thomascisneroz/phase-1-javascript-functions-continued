// Your code here
function saturdayFun(activity="roller-skate") {
   return(`This Saturday, I want to ${activity}!`)
}


function mondayWork(destination="go to the office") {
    return(`This Monday, I will ${destination}.`)
}

function wrapAdjective(woo ="*") {
    return function(emphatic="a dedicated programer"){
    return (`You are ${woo}${emphatic}${woo}!`);
    }
}