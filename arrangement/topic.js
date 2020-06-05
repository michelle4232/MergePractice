let topicsArray=[
    "上映",
    "播出",
    "播出",
    "播出",
    "播出",
    "播出",
    "播出",
    "播出"
];

let temp=[
    "剛上!!!",
    "47,054",
    "29,149",
    "10,169",
    "6,157",
    "3,905",
    "3,105",
    "587"
]

let money=[
    "剛上!!!",
    "15,153,617",
    "10,495,167",
    "3,313,138",
    "2,174,816",
    "1,500,811",
    "930,866",
    "164,870"
]
let startDate = new Date();

//函數建立
function setMonthAndDay(startMonth, startDay)
{
     //一次設定好月分與日期
     startDate.setFullYear(2016);
     startDate.setMonth(11,2);
     //時間先忽略,設為0
     startDate.setHours(0);
     startDate.setMinutes(0);
     startDate.setSeconds(0);
}

//函數呼叫

//$("#datepicker1").datepicker();改成現在日期
//setFullYearAndMonthAndDay(2016,12,2);//自己設定時間