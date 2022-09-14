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
var teacher1 = [ // Sir Khristian
    sunday =    [],
    monday =    ['Class Starting Soon', 'HUM',                              'No Class',     '11A E-Tech',   'Healthy Tidbits', 'RHGP',     '10E',             'Lunch Break', '11C E-Tech', '11E E-Tech', 'Staggered Dismissal',  'Class Over'],
    tuesday =   ['Class Starting Soon', 'DEAR',                             '10D',          'No Class',     'Healthy Tidbits', '10C',      'No Class',        'Lunch Break', '8B',         '11C E-Tech', 'Staggered Dismissal',  'Class Over'],
    wednesday = ['Class Starting Soon', 'Aqsa Khamsat Ashar',               '9A',           '8C',           'Healthy Tidbits', 'No Class', '11B E-Tech',      'Lunch Break', '11E E-Tech', 'No Class',   'Staggered Dismissal',  'Class Over'],
    thursday =  ['Class Starting Soon', 'Independent Reading and Learning', '11A E-Tech',   '10A',          'Healthy Tidbits', '9C',       '10B',             'Lunch Break', '9B',         '9D',         'Staggered Dismissal',  'Class Over'],
    friday =    ['Class Starting Soon', 'Adviser\'s Period',                '11B E-Tech',   '9E',           'Healthy Tidbits', '8A',       'Adviser\'s time', 'Class Over'],
    saturday =  [],
];
var teacher2 = [ // Ms Acel
    sunday =    [],
    monday =    ['Class Starting Soon', 'HUM',                              'No Class', '10C',      'Healthy Tidbits', 'RHGP', '10A',      'Lunch Break', '10D', '9E', 'Staggered Dismissal'],
    tuesday =   ['Class Starting Soon', 'DEAR',                             '10E',      'No Class', 'Healthy Tidbits', '10D',  '9E',       'Lunch Break', '10B', '9C', 'Staggered Dismissal'],
    wednesday = ['Class Starting Soon', 'Aqsa Khamsat Ashar',               '10E',      '10C',      'Healthy Tidbits', '10A',  'No Class', 'Lunch Break', '10B', '9C', 'Staggered Dismissal'],
    thursday =  ['Class Starting Soon', 'Independent Reading and Learning', '10B',      '10C',      'Healthy Tidbits', '10E',  'No Class', 'Lunch Break', '9C',  '9E', 'Staggered Dismissal'],
    friday =    ['Class Starting Soon', 'Adviser\'s Period',                'No Class', '10A',      'Healthy Tidbits', '10D',  'Adviser\'s time'],
    saturday =  [],
];
var teacher3 = [ // Ms Gemma
    sunday =    [],
    monday =    ['Class Starting Soon', 'HUM',                              '10D AP',  '10E AP',   'Healthy Tidbits', 'RHGP',   'No Class', 'Lunch Break', '10B AP',   'No Class', 'Staggered Dismissal'],
    tuesday =   ['Class Starting Soon', 'DEAR',                             '10B AP',  '10E EsP',  'Healthy Tidbits', '10A AP', '7B AP',    'Lunch Break', '10C AP',   '7B EsP',   'Staggered Dismissal'],
    wednesday = ['Class Starting Soon', 'Aqsa Khamsat Ashar',               '10B EsP', 'No Class', 'Healthy Tidbits', '10C AP', '7B AP',    'Lunch Break', 'No Class', '7A AP',    'Staggered Dismissal'],
    thursday =  ['Class Starting Soon', 'Independent Reading and Learning', '7A EsP',  'No Class', 'Healthy Tidbits', '10D AP', '10D EsP',  'Lunch Break', '10E AP',   '7A AP',    'Staggered Dismissal'],
    friday =    ['Class Starting Soon', 'Adviser\'s Period',                '10C EsP', 'No Class', 'Healthy Tidbits', '10A AP', 'Adviser\'s time'],
    saturday =  [],
];
var teacher4 = [
    sunday =    [],
    monday =    ['Class Starting Soon', 'HUM',                              'No Class',     '11A E-Tech',   'Healthy Tidbits', 'RHGP',     '10E',             'Lunch Break', '11C E-Tech', '11E E-Tech', 'Staggered Dismissal'],
    tuesday =   ['Class Starting Soon', 'DEAR',                             '10D',          'No Class',     'Healthy Tidbits', '10C',      'No Class',        'Lunch Break', '8B',         '11C E-Tech', 'Staggered Dismissal'],
    wednesday = ['Class Starting Soon', 'Aqsa Khamsat Ashar',               '9A',           '8C',           'Healthy Tidbits', 'No Class', '11B E-Tech',      'Lunch Break', '11E E-Tech', 'No Class',   'Staggered Dismissal'],
    thursday =  ['Class Starting Soon', 'Independent Reading and Learning', '11A E-Tech',   '10A',          'Healthy Tidbits', '9C',       '10B',             'Lunch Break', '9B',         '9D',         'Staggered Dismissal'],
    friday =    ['Class Starting Soon', 'Adviser\'s Period',                '11B E-Tech',   '9E',           'Healthy Tidbits', '8A',       'Adviser\'s time'],
    saturday =  [],
];
var teacher5 = [
    sunday =    [],
    monday =    ['Class Starting Soon', 'HUM',                              'No Class',     '11A E-Tech',   'Healthy Tidbits', 'RHGP',     '10E',             'Lunch Break', '11C E-Tech', '11E E-Tech', 'Staggered Dismissal'],
    tuesday =   ['Class Starting Soon', 'DEAR',                             '10D',          'No Class',     'Healthy Tidbits', '10C',      'No Class',        'Lunch Break', '8B',         '11C E-Tech', 'Staggered Dismissal'],
    wednesday = ['Class Starting Soon', 'Aqsa Khamsat Ashar',               '9A',           '8C',           'Healthy Tidbits', 'No Class', '11B E-Tech',      'Lunch Break', '11E E-Tech', 'No Class',   'Staggered Dismissal'],
    thursday =  ['Class Starting Soon', 'Independent Reading and Learning', '11A E-Tech',   '10A',          'Healthy Tidbits', '9C',       '10B',             'Lunch Break', '9B',         '9D',         'Staggered Dismissal'],
    friday =    ['Class Starting Soon', 'Adviser\'s Period',                '11B E-Tech',   '9E',           'Healthy Tidbits', '8A',       'Adviser\'s time'],
    saturday =  [],
];

var teacher;


//subDisplay[time.getDay()][period]
let subDisplay;
let period = 0;

//teachers
function selectUser() {
    if (document.getElementById('user_teacher1').checked) {
        localStorage.setItem("user", "teacher1");
    } else if (document.getElementById('user_teacher2').checked) {
        localStorage.setItem("user", "teacher2");
    } else if (document.getElementById('user_teacher3').checked) {
        localStorage.setItem("user", "teacher3");
    };    
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
    
    timeInMinutes = (time.getHours()*60)+time.getMinutes();
    
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
        
        case 655 <= timeInMinutes && time.getDay() == 5: //10:55 onwards (friday)
            period = 7;
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

    let user = localStorage.getItem("user") || "";
    
    switch (user) {
        case "teacher1":
            teacher = teacher1
            break;
        case "teacher2":
            teacher = teacher2
            break;
        case "teacher3":
            teacher = teacher3
            break;
    
        default:
            break;
    }

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