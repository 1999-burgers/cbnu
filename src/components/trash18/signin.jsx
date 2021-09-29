// import React, { useState } from "react";
// import styles from './signin.module.css'
// import { auth } from '../../service/firebase'
// import { BrowserRouter, Switch, useHistory } from 'react-router-dom';
// import firebaseapp from '../../service/firebase'

// const Signin = ({ authService, childRepository }) => {
//   const childobj = new Object();
//   const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const historystate = useHistory().state;
//   const [userID, setUserId] = useState(historystate && historystate.id);
//   const [newAccount, setNewAccount] = useState(true);

//   // 아이디창에 글씨띄우기
//   const onChange = (event) => {
//     const { target: { name, value } } = event;
//     if (name === 'email') {
//       setEmail(value)
//     } else if (name === "password") {
//       setPassword(value);
//     }
//   }

//   // e-mail 로그인
//   const onSubmit = async (event) => {
//     // 에러 없을 때
//     try {
//       let data;
//       // 로그인
//       data = await auth.signInWithEmailAndPassword(email, password);
//       goTo(data.user.uid)
//     }
//     // 에러 발생 시 
//     catch (error) {
//       // 계정 없을 때
//       if (error.code == 'auth/user-not-found') {
//         var result = window.confirm("계정정보가 없습니다. 회원가입을 하시겠습니까?");
//         if (result == true) {
//           history.push('/join')
//         }
//       }
//       // 비번 틀렸을때
//       else if (error.code == 'auth/wrong-password') {
//         window.alert("잘못된 비밀번호 입니다.")
//       }
//       console.log("에러", error, error.code)
//     }
//   }

//   // 라우팅기능
//   const goTo = (childID) => {
//     const promise = new Promise((resolve, reject) => {
//       var info = firebaseapp.database().ref(`${childID}`);
//       info.on('value', snapshot => {
//         var value = snapshot.val()
//         console.log(value, "1 값은?")
//         value ? resolve(value) : reject("error");
//       })
//     })
//     promise
//       .then(value => {
//         console.log(value, "2 값은?")
//         history.push({
//           pathname: '/mychild',
//           state: { id: value },
//         })
//         console.log("정보있어서 마이차일드로옴")
//         // if (value == null) {
//         //   history.push({
//         //     pathname: '/mychild',
//         //     state: { id: value },
//         //   })
//         //   console.log("정보있어서 마이차일드로옴")
//         // }
//         // else {
//         //   history.push({
//         //     pathname: '/mychild',
//         //     state: { id: value },
//         //   })
//         //   console.log("정보있어서 마이차일드로옴")
//         // }
//       })
//       .catch(childID => {
//         history.push({
//           pathname: '/kindergarten',
//           state: { id: childID },
//         })
//         console.log("정보없어서 마이차일드로옴", childID)
//       })

//     // console.log("확인")
//     // const result = childRepository.searchInfo(childID);
//     // setTimeout(result => console.log(result), 10000)
//     // const result = undefined;
//     // const promise = new Promise((resolve, reject) => {
//     //   const result = childRepository.searchInfo(childID); // childRepository.searchinfo가 성공적으로 실행이 된다면 ? if result로 진행
//     //   console.log("끝")
//     //   // result ? resolve(result) : reject("error");
//     //   // if (result != null) {
//     //   //   resolve({ result });
//     //   // }
//     //   // else
//     //   //   reject(new Error("에러발생"))
//     // })
//     // const result = childRepository.searchInfo(childID);
//     // console.log("확인완료 리턴값은", result, "이다.")
//     // promise.then(
//     //   (val) => { console.log(val) },
//     //   (err) => { console.log(err) }
//     // )
//     // .then((result) => {
//     //   console.log("프로미스 내부 결과출력", result);
//     //   if (!!result === true) {  // 어린이집 정보가 없다면 kindergarten으로 옮겨줌
//     //     history.push({
//     //       pathname: '/kindergarten',
//     //       state: { id: childID },
//     //     })
//     //     console.log("정보없어서 킨더가든으로옴")
//     //   }
//     //   else if (!!result === false) { // 어린이집 정보가 있다면 mychild로 옮겨줌
//     //     history.push({
//     //       pathname: '/mychild',
//     //       state: { id: childID },
//     //     })
//     //     console.log("정보있어서 마이차일드로옴")
//     //   }
//     //   console.log("프로미스 내부 마지막결과출력", result);
//     // })
//     // .then(console.log("최종 결과출력"));


//     // if (result == true) {
//     //   history.push({
//     //     pathname: '/kindergarten',
//     //     state: { id: childID },
//     //   })
//     //   console.log("정보없어서 킨더가든으로옴")
//     // }
//     // // 어린이집 정보가 있다면 mychild로 옮겨줌
//     // else if (result == false) {
//     //   history.push({
//     //     pathname: '/mychild',
//     //     state: { id: childID },
//     //   })
//     //   console.log("정보있어서 마이차일드로옴")
//     // }


//     // if (({ childID } in childobj) == false) {
//     //   history.push({
//     //     pathname: '/kindergarten',
//     //     state: { id: childID },
//     //   })
//     //   console.log("정보없어서 킨더가든으로옴")
//     // }
//     // // 어린이집 정보가 있다면 mychild로 옮겨줌
//     // else if (({ childID } in childobj) == true) {
//     //   history.push({
//     //     pathname: '/mychild',
//     //     state: { id: childID },
//     //   })
//     //   console.log("정보있어서 마이차일드로옴")
//     // }
//   }

//   // 플랫폼으로 로그인시 uid를 받아서 kindergarten or mychild로 라우팅
//   const onLogin = event => {
//     authService
//       .login(event.currentTarget.id)
//       .then(data => goTo(data.user.uid))
//   };

//   // e-mail로 회원가입해
//   const onSignup = () => {
//     history.push({
//       pathname: '/join'
//     })
//   }

//   return (
//     <div className="sign-container">
//       <div className="sign-up-wrap">
//         <form className={styles.loginform}>
//           <div className={styles.inputform}>
//             <input
//               className={styles.inputid}
//               type="email"
//               placeholder="이메일을 입력하세요."
//               name="email"
//               required value={email}
//               onChange={onChange}
//             />
//             <input
//               className={styles.inputpw}
//               type="password"
//               placeholder="비밀번호를 입력하세요."
//               name="password"
//               required value={password}
//               onChange={onChange}
//             />
//           </div>
//         </form>
//         <button
//           className={styles.loginbutton}
//           onClick={onSubmit}
//           type="submit">로그인
//         </button>
//         <hr></hr>
//         <p className={styles.text}>
//           간편하게 시작하기
//         </p>
//         <div className={styles.platform}>
//           <button id='Google' className={styles.buttongoogle} onClick={onLogin}><i class="fab fa-google"></i></button>
//           <button id='Facebook' className={styles.buttonfacebook} onClick={onLogin}><i class="fab fa-facebook-f"></i></button>
//           {/* <button id='Twitter' className={styles.buttontwitter} onClick={onLogin}><i class="fab fa-twitter"></i></button> */}
//           <button className={styles.buttonemail} onClick={onSignup}><i class="fas fa-envelope"></i></button>
//         </div>
//       </div>
//     </div>

//   );
// };
