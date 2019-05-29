

var gProjs;

function createProjs(){
    return [
    createProj('GuessMe', 'Guess Me', 'Better guess right', 'Guessing game', 'file:///C:/Users/Lior/Desktop/uploud/GuessMe-Ex-startHere/index.html', '28/05/2019', 'Guess'),
        createProj('MineSweeper', 'Mine Sweeper', 'Better not find a bomb', 'Playing mine sweeper', 'file:///C:/Users/Lior/Desktop/projs/MineSweeper/index.html', '28/05/2019', 'MineSweeper'),
        createProj('Ball', 'Collect those Balls', 'Better Collect those Balls', 'Ball game', 'file:///C:/Users/Lior/Desktop/backupweek3/week3/ball-board/index.html', '28/05/2019', 'Ball')

    ]
}


function createProj(id,name,title,desc,url,publisheAt,labels) {
    return {
        id: id,
        name: name,
        title: title,
        desc:desc,
        url: url,
        publisheAt: publisheAt,
        labels: labels
    }
}



// function getProjById(projId) {
//     var proj = gProjs.find(function (proj) {
//         return projId === proj.id
//     })
//     return proj
// }


function getProj(){
    return gProjs;
}