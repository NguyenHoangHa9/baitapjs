var team = ['quy', 'hung', 'ha', 'hoang', 'duc1', 'duc2'];
var arrayLength = team.length;
var memberNumber = 0;
var msg ='';

for (var i = 0; i < arrayLength; i++) {
    memberNumber = (i + 1);

    msg += 'Member ' + memberNumber + ': ';

    msg += team[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;
