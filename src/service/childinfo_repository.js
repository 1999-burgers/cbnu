import firebaseapp from './firebase'

class ChildRepository{
  searchInfo(userId){
    console.log("서치인포 실행됨", userId)
    let result;
    var info = firebaseapp.database().ref(`${userId}`);
    info.once('value', snapshot =>{
      var value = snapshot.val()
      if(value!=null){
        console.log("value가 null 이 아닐때 값", value);
        result = true;
      }else{
        console.log("value가 null",value);
        result = false;
      }
      console.log("출력값1", result)
    })
    console.log("출력값2",result)
    return result
  }


  saveinfo(userId, kindergarten){
    console.log("정보 저장 실행됨")
    console.log("유저아이디 : ", userId, "어린이집정보", kindergarten)
    firebaseapp.database().ref(`${userId}`).set({
      kindergarten
    })
  }
}

export default ChildRepository;