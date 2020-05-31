

$(document).ready(function () {
    $(".carousel").carousel({interval:3500});

    $("#bgchange").click(function () {
        let arr = $("#bgColorValue").val();
        $("body").css({"background-color":arr});
        console.log("work");
    });

    $("#arrManip").click(function () {
        let arr = $("#arrayManipulation").val();
        let count = 0;
        for(let i = 0;i < arr.length;i++){
            if(arr[i] == 3){
                count++;
            }
        }
        $("#arrayManipulation").val("В масиві " + count + " цифри 3");
    });

    $("#arrNumberCreation").click(function () {
        let arr = $("#arrNumber").val();
        let newArr = [];
        $("#arrNumber").val(arr[0] + arr[1] + "-" + arr[2] + arr[3] + "-" + arr[4] + arr[5]);
    });
    $("#btnToggle").click(function () {
        setInterval(function () {
            let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
            let temp = "";
            temp+="#";
            for(let i = 0;i < 6;i++){
                temp += arr[Math.floor(Math.random()*16)];
            }
            console.log(temp);
            $(".blockShit-sm").css("background-color",temp)
        },5000)
    });

    $("#targetAddition").click(function () {
        let arr = $("#mylink").attr("href");
        let temp = "";
        for(let i = 0;i < 7;i++){
            temp += arr[i];
        }
        if(temp === "http://"){
            $("#mylink").attr("target","_blank");
        }
        console.log(temp);
    });

    $("#ex6Btn").click(function () {
        let arr = $("#ex6").val();
        $("#ex6").val("");
        $("#ex6").attr("placeholder",arr);
    });

    let count = 0;

    $("#nextimg").click(function () {
        let imgarr = ["css/img/1.png","css/img/2.png","css/img/3.png"];
        count++;
        if(count >=3){
            count = 0;
        }
        $("#myimg").attr("src",imgarr[count]);
    });

    $("#colorBtn").click(function () {
        let arr = $("#colors1").text();
        let spanz = [];
        for(let i = 0;i < arr.length; i++){
            spanz[i] = `<span>${arr[i]}</span>`;

        }
        $("#colors1").text("");
        for(let i = 0;i < arr.length;i++){
            let colorArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
            let temp = "";
            temp+="#";
            for(let j = 0;j < 6;j++){
                temp += colorArr[Math.floor(Math.random()*16)];
            }
            $("#colors1").append(spanz[i]);
            $("#colors1 span:last").css("color",temp);
        }
    });

    $("#MakeDiv").click(function () {
       $(".govnoed").css("width",`${ $("#divWidth").val() }`);
       $(".govnoed").css("height",`${ $("#divHeight").val() }`);
    });

});

