//declare all variables:
    var time;
    var hour;
    var min;
    var am_pm
    var currentTime
    var weekday;
    var displayDay;

//schedule arrays
var teacher1 = [
    monday = ['waw1','waw2','waw3'],
    tuesday = ['wew','wew2','wew3'],
    wednesday = ['wiw','wiw2','wiw3'],
    thursday = ['wow','wow2','wow3'],
    friday = ['wuw','wuw2','wuw3'],
];
var teacher2 = [
    monday = ['wawa1','wawa2','wawa3'],
    tuesday = ['wewa','wewa2','wewa3'],
    wednesday = ['wiwa','wiwa2','wiwa3'],
    thursday = ['wowa','wowa2','wowa3'],
    friday = ['wuwa','wuwa2','wuwa3'],
];
var teacher3 = [
    monday = ['wawb1','wawb2','wawb3'],
    tuesday = ['wewb','wewb2','wewb3'],
    wednesday = ['wiwb','wiwb2','wiwb3'],
    thursday = ['wowb','wowb2','wowb3'],
    friday = ['wuwb','wuwb2','wuwb3'],
];
var teacher4 = [
    monday = ['wawc1','waw2c','waw3c'],
    tuesday = ['wewc','wew2c','wew3c'],
    wednesday = ['wiwc','wiw2c','wiw3c'],
    thursday = ['wowc','wow2c','wow3c'],
    friday = ['wuwc','wuw2c','wuw3c'],
];
var teacher5 = [
    monday = ['wawd1','wawd2','wawd3'],
    tuesday = ['wewd','wewd2','wewd3'],
    wednesday = ['wiwd','wiwd2','wiwd3'],
    thursday = ['wowd','wowd2','wowd3'],
    friday = ['wuwd','wuwd2','wuwd3'],
];

var teacher = teacher1;

//update the display
function update() {
    document.getElementById("displaySubject").innerHTML = subDisplay;
    
};
//subDisplay[time.getDay()][period]
let subDisplay;
let period = 0;

//change period
function pChange() {
    period++;
    update();
    return period;
};

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
    

    weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    displayDay = weekday[time.getDay()];
    
    //change day
    if (teacher) {
        subDisplay = teacher[time.getDay()][period];
    } else {
        subDisplay = 'Select a user';
    }
    if (hour == 2 && period != 1) {
        pChange();
    }

    update();
    document.getElementById("clock")
            .innerHTML = currentTime;
    

}


update();

//notepad

/* setInterval(() => {
    var textid = document.getElementById("notesBody").value;
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    document.getElementById("demo").innerHTML = textid.replace(exp,"<a href='$1'>$1</a>");
}, 1000); */