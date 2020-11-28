
var list = [];

for (var i = 1; i < 46; i++) {
    list.push(i);
}

var result = [];
for (var k = 0; k < 6; k++) {
    var index = Math.floor(Math.random() * list.length);
    console.log('index: ' + index);
    console.log('num: ' + list[index]);
 
    result.push(list[index]);
    list.splice(index,1);
}

result.sort(compare);

function compare(a,b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else  {
        return 0;
    }
}


for (var m = 0; m < result.length; m++) {
    
    document.write('<span class="ball">' + result[m] + '</span>');
        
    
}

