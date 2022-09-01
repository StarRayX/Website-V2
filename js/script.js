//declare all variables:
    var time;
    var hour;
    var min;
    var am_pm
    var currentTime
    var weekday;
    var displayDay;
    var timeInMinutes;

//schedule arrays
var teacher1 = [
    sunday = [],
    monday = ['Class Starting Soon','HUM','No Class','11A - Empowerment Technologies','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    tuesday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    wednesday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    thursday = ['Class Starting Soon','waw1','waw2','11A - Empowerment Technologies','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    friday = ['Class Starting Soon','waw1','waw2','11A - Empowerment Technologies','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    saturday = [],
];
var teacher2 = [
    sunday = [],
    monday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    tuesday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    wednesday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    thursday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    friday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    saturday = [],
];
var teacher3 = [
    sunday = [],
    monday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    tuesday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    wednesday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    thursday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    friday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    saturday = [],
];
var teacher4 = [
    sunday = [],
    monday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    tuesday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    wednesday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    thursday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    friday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    saturday = [],
];
var teacher5 = [
    sunday = [],
    monday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    tuesday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    wednesday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    thursday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    friday = ['Class Starting Soon','waw1','waw2','waw3','waw1','waw2','waw3','waw1','waw2','waw3','wow'],
    saturday = [],
];

var teacher = teacher1;


//subDisplay[time.getDay()][period]
let subDisplay;
let period = 0;

//teachers
function setTeacher(inpTeacher) {
    teacher = inpTeacher;
    return teacher;
}

//how to make themes: 
//1. create css classes of the themes with css color variables
//2. array for the list of theme names, and variable for index number
//3. onclick function that adds 1 to the index variable, and adds the theme class to the body


//display time
setInterval(showTime, 1000);
function showTime() {
    time = new Date();
    hour = time.getHours();
    min = time.getMinutes();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 12 && min >= 01) {
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
  
    currentTime = hour + ":" 
            + min + " "+ am_pm;
    
    timeInMinutes = 560;
    
    switch (true) {
        case timeInMinutes < 450:
            subDisplay = `Class Starting Soon...`
            update();
            break;

        case 450 <= timeInMinutes && timeInMinutes < 465: //7:30-7:45
            period = 1;
            update();
            break;
        
        case 465 <= timeInMinutes && timeInMinutes < 525: //7:45-8:40
            period = 2;
            update();
            break;
        
        case 525 <= timeInMinutes && timeInMinutes < 580: //8:45-9:40
            period = 3;
            update();
            break;
        
        case 580 <= timeInMinutes && timeInMinutes < 600: //9:40-10:00
            period = 4;
            update();
            break;
        
        case 600 <= timeInMinutes && timeInMinutes < 660: //10:00-10:55
            period = 5;
            update();
            break;
        
        case 660 <= timeInMinutes && timeInMinutes < 715 && time.getDay() != 5: //11:00-11:55
            period = 6;
            update();
            break;
        
        case 715 <= timeInMinutes && timeInMinutes < 750 && time.getDay() != 5: //11:55-12:30
            period = 7;
            update();
            break;
        
        case 750 <= timeInMinutes && timeInMinutes < 810 && time.getDay() != 5: //12:30-1:25
            period = 8;
            update();
            break;
        
        case 810 <= timeInMinutes && timeInMinutes < 865 && time.getDay() != 5: //1:30-2:25
            period = 9;
            update();
            break;
        
        case 865 <= timeInMinutes && timeInMinutes < 870 && time.getDay() != 5: //2:25-2:30
            period = 10;
            update();
            break;
        
        case 870 <= timeInMinutes && time.getDay() != 5: //2:30 onwards
            period = 11;
            subDisplay = 'Class Over';
            update();
            break;
        
    }
    //change day
    if (teacher) {
        subDisplay = teacher[time.getDay()][period];
    } else {
        subDisplay = 'Select a user';
    }

    update();
    document.getElementById("clock")
            .innerHTML = currentTime;

    
    return timeInMinutes, subDisplay;
}
//update the display
function update() {
    document.getElementById("displaySubject").innerHTML = subDisplay;
    
};

update();






//notepad

/* setInterval(() => {
    var textid = document.getElementById("notesBody").value;
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    document.getElementById("demo").innerHTML = textid.replace(exp,"<a href='$1'>$1</a>");
}, 1000); */