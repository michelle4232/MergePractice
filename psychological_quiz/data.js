/*
//存放資料
let questions = [//array
    {
        "question":"你現在對今年非常樂觀？",
        "answers":[
            ["是的",2],
            ["不是",3],
            ["不知道",4]
        ]
    },
    {
        "question":"你覺得自己是不是越來越不可靠了？",
        "answers":[
            ["是的",3],
            ["不是",4],
            ["一般",5]
        ]
    },
    {
        "question":"想到新的一年來到，就非常開心？",
        "answers":[
            ["是的",4],
            ["不是",5],
            ["還好",6]
        ]
    },
    {
        "question":"如果給你五百萬要你離開很愛的戀人，你會？",
        "answers":[
            ["好的",5],
            ["都可以",6],
            ["不要",7]
        ]
    },
    {
        "question":"過去一年裡，你有沒有受到很大的打擊？",
        "answers":[
            ["有的",6],
            ["沒有",7],
            ["還在承受著呢",8]
        ]
    },
    {
        "question":"你喜歡下面哪一個形容天氣的詞？",
        "answers":[
            ["風和日麗",7],
            ["豔陽高照",8],
            ["秋高氣爽","A"]
        ]
    },
    {
        "question":"你覺得自己的愛情一直是比較不一般的？",
        "answers":[
            ["是的",8],
            ["不是",9],
            ["不知道",10]
        ]
    },
    {
        "question":"你會想要跟情人去哪裡旅行？",
        "answers":[
            ["蔚藍海岸",9],
            ["山林湖畔","A"],
            ["歷史古鎮","B"]
        ]
    },
    {
        "question":"除了愛情，你更希望今年實現哪件事情？",
        "answers":[
            ["買房子","C"],
            ["工作升遷","D"],
            ["變帥變美","A"]
        ]
    },
    {
        "question":"下面哪一種飲料中獎，你最想要？",
        "answers":[
            ["優格再來一瓶","B"],
            ["啤酒再來一瓶","C"],
            ["紅茶再來一瓶","D"]
        ]
    }
    
];

let finalAnswers={//object
        "A":["愛情有點酸","在今年，你的愛情有一些酸哦，不過還好，不苦，而且有時候雖然酸，酸中也帶了絲甜。即使你會與喜歡的人沒有緣分走到一起，但是你們彼此能祝福對方。心中有些酸，是因為你看得開。現在對愛情真的看得淡了，不會強求，也不渴望什麼轟轟烈烈，甜甜蜜蜜，只希望過了這陣酸，會有甜頭來。"],
        "B":["愛情超級甜","在今年裡，你的愛情超級甜蜜哦，真的有如蜜糖一樣甜，不時撒一把狗糧，能讓旁邊的人都覺得發膩哦。當然啦，你這麼幸運，遇到甜蜜的愛情，也是因為你是一個溫暖的人啊，值得這麼好的愛情，也值得別人好好疼愛你。你也會加倍珍惜，好好回饋對方，這樣才是愛情的正確打開方式。"],
        "C":["愛情有苦有甜","你在今年的愛情，一定是有苦也有甜的，其實這才是正常的感情，或者說普通的感情。有的人一直甜蜜，他們是幸運兒。而你是普通人，感情中會有甜蜜的時候，也會有爭吵矛盾，會有淚水，會有痛苦。但是學會理智經營感情，在甜的時候好好享受，在苦的時候及時審視，愛情才能持久。"],
        "D":["愛情平淡沒滋味","今年裡，你的愛情沒有啥滋味，可能你根本就遇不到愛情，繼續又單身一整年，這樣也好，你可以忙於賺錢。也可能你的愛情就是有如一碗平平淡淡的白開水，沒有什麼滋味，但是沒有它又不行。或者是缺少了一些刺激，但是誰的愛情能一直轟轟烈烈呢？平淡如水，細水長流，未嘗不是一件好事。"]
};*/
//存放資料
let questions = [//array
    {
        "question":"你比較偏愛哪種類型的韓劇？",
        "answers":[
            [" 懸疑解謎",3],
            ["浪漫愛情",2],
            ["青春勵志",2],
            ["奇幻穿越",3]
        ]
    },
    {
        "question":"看劇的時候，你都會搭配什麽零食呢？",
        "answers":[
            ["薯片",4],
            ["炸物",3],
            ["泡麵",3],
            ["吃宵夜會胖，不吃",4]
        ]
    },
    {
        "question":" 如果劇情正進入高潮，突然有人打給你，這時你會？",
        "answers":[
            [" 只好按暫停，接起來",5],
            ["繼續看，讓手機擺旁邊響",4],
            ["直接掛掉，稍後再回撥",4],
            ["掛掉，傳訊息問對方什麽事",5]
        ]
    },
    {
        "question":"看到感人必哭的情節時，通常你會？",
        "answers":[
            ["跟著主角一起哭",5],
            ["感動，但不會哭",6],
            ["快轉",6],
            ["想起自己的類似經歷",5]
        ]
    },
    {
        "question":"男主角的哪種設定一定會讓你心動？",
        "answers":[
            ["有錢有勢",6],
            ["浪漫體貼",7],
            ["善良溫柔",7],
            ["理性有智慧",6]
        ]
    },
    {
        "question":"你通常會因為什麽原因而追一部劇呢？",
        "answers":[
            ["有喜歡的演員",7],
            ["朋友推薦",8],
            ["收視率高",8],
            ["喜歡的題材",7]
        ]
    },
    {
        "question":"你喜歡哪一種追劇模式？",
        "answers":[
            ["追ON檔，不想被劇透",8],
            [" 播完全部集數再追",8],
            ["播到一半再開始追",9],
            ["追韓國直播，跟上討論",9]
        ]
    },
    {
        "question":"某天你走在路上被攔下，對方希望你能幫忙客串一部戲劇，你覺得這部劇是？",
        "answers":[
            ["古裝宮鬥劇",9],
            ["家庭倫理劇",9],
            ["校園愛情劇",10],
            ["懸疑驚悚劇",10]
        ]
    },
    {
        "question":"在咖啡廳遇到發現喜歡的演員，這時你會？",
        "answers":[
            ["過去要簽名",10],
            ["寫紙條給他",10],
            ["偷拍他","D"],
            ["一直偷看他，讓他發現你","A"]
        ]
    },
    {
        "question":"你相信有平行世界嗎？",
        "answers":[
            ["相信","B"],
            ["不相信","C"]
        ]
    }
    
];

let finalAnswers={//object
        "A":["《憨人》","鼓勵大家勇於追夢，該算是樂團五月天的代表哥之一!「憨人」是罵人笨的意思，五月天卻拿來歌頌，因為他們認為憨人不是憨，而是敢於追求夢想。「我有我的路，有我的夢，夢中的那個界，甘講伊是一場空？」《憨人》這首歌算是五月天第一首勵志歌曲，其實，他們希望歌迷跟他們一樣，都可以發揮憨人精神"],
        "B":["《寵上天》","朋友之間可以為彼此犧牲的情感，像是《鐵達尼號》沉船前那四個樂手的革命情感，一種無怨無悔，就算世界消失的前一秒也要把握快樂。代表你十分的有義氣,可以為了朋友赴湯蹈火, 兩肋插刀"],
        "C":["《頑固》","在追求夢想的路上, 很辛苦, 但你總能靠著意志力堅持下去,有著堅忍不拔的個性,即使現實很不美好, 但也不會忘記生命中美好的部分"],
        "D":["《入陣曲》","入陣曲是臺灣樂團五月天於2013年推出的單曲,圍繞台灣近年重大社會爭議，歌詞對政府多所影射,代表你敢說敢做的精神!"]
};

let pictures={
    "A":["<img src=\"https://images.chinatimes.com/newsphoto/2020-03-13/900/20200313004733.jpg\">"],
    "B":["<img src=\"https://cdn1.wishnote.tw/200/2017/01/13/200_56281_1484297067.jpeg\">"],
    "C":["<img src=\"https://i.beauty321.com/816x/https://il.beauty321.com/gallery/articleIMG/month_1707/201707071424567024.jpg\">"],
    "D":["<img src=\"https://img.kpopdata.com/upload/content/797/770/6989574af854e3dc9380.jpg\">"]
}
