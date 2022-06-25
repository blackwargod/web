// JavaScript Document

 	var minus = document.getElementById("minus");
    var count = document.getElementById("count");
    var add = document.getElementById("add");
    var total = document.getElementById("total");

    // 事件处理函数
    var addFun = function(event){
        var addRes = Number(count.value) + 1;
        count.value = addRes ;
        console.info( addRes );
        document.getElementById("total").value = count.value * 100;
    };
    var minusFun = function(event){
        if(count.value>0){
            var minusRes = Number(count.value) - 1;
            count.value = minusRes ;
            console.info( minusRes );
            document.getElementById("total").value = count.value * 100;
        }
    };

    //  添加事件监听
    add.addEventListener("click", addFun );
    minus.addEventListener("click", minusFun );





	var minusOne = document.getElementById("minusOne");
    var countOne = document.getElementById("countOne");
    var addOne = document.getElementById("addOne");
    var totalOne = document.getElementById("total");

    // 事件处理函数
    var addFunTwo = function(event){
        var addResOne = Number(countOne.value) + 1;
        countOne.value = addResOne ;
        console.info( addResOne );
        document.getElementById("totalOne").value = countOne.value * 100;
    };
    var minusFunTwo = function(event){
        if(countOne.value>0){
            var minusResOne = Number(countOne.value) - 1;
            countOne.value = minusResOne ;
            console.info( minusResOne );
            document.getElementById("totalOne").value = countOne.value * 100;
        }
    };

    //  添加事件监听
    addOne.addEventListener("click", addFunTwo );
    minusOne.addEventListener("click", minusFunTwo );
