import firebaseapp from './firebase'

class ChildRepository{
  searchInfo(userId){
    var info = firebaseapp.database().ref(`${userId}`);
      info.on('value', snapshot =>{
      var value = snapshot.val()
      return value
    })
  }
  
  saveinfo(userId, kindergarten, name, childclass){
    console.log("정보 저장 실행됨")
    console.log("이름 : ", name, "반 : ", childclass)
    firebaseapp.database().ref(`${userId}`).set({
      name : name,
      kindergarten:kindergarten,
      childclass:childclass
    })

  }
}

export default ChildRepository;