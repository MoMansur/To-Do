export default class User{
    constructor(username, bgColor){
        this.username = username;
        this.bgColor = bgColor
    }
}

const theUser = JSON.parse(localStorage.getItem('UserData')) || [];

export function newUserFunc(username, bgColor){
  const newUser = new User(username, bgColor)
  theUser.push(newUser)
}

if(theUser === ''){
    theUser.push({username: 'User', bgColor: 'blue'})
}
localStorage.setItem('UserData', JSON.stringify(theUser));
