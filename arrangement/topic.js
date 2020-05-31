let topicsArray=[
    "首播",
    "假日",
    "假日",
    "播出",
    "播出",
    "播出",
    "播出",
    "播出",
    "假日",
    "假日",
    "播出",
    "播出",
    "播出",
    "播出",
    "播出",
    "假日",
    "假日",
    "播出",
    "播出",
    "播出",
    "播出",
    "播出",
    "假日",
    "假日",
    "播出",
    "播出",
    "播出",
    "播出",
    "播出",
    "假日",
    "假日",
    "播出",
    "播出",
    "播出",
    "播出",
    "播出",
    "假日",
    "假日",
    "播出",
    "最後一集"
];

let temp=[
    "1.43",
    "2.03",
    "2.01",
    "2.14",
    "2.46",
    "2.63",
    "2.93"
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