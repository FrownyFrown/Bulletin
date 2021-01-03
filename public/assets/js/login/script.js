  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyATk49Z9aVjo-nUClIkMJLWJZgUmo9Xxn0",
    authDomain: "bulletin-33d5d.firebaseapp.com",
    databaseURL: "https://bulletin-33d5d.firebaseio.com",
    projectId: "bulletin-33d5d",
    storageBucket: "bulletin-33d5d.appspot.com",
    messagingSenderId: "646885621531",
    appId: "1:646885621531:web:026a4edb899158c7f99dbe",
    measurementId: "G-8P26DTEEQP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//   firebase.analytics();

const auth = firebase.auth(); //명령어 간단히...

function signUp(){ //회원가입(이미 가입할 계정)
    var email = document.getElementById("email"); 
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("System: 계정을 생성하였습니다 : " + email);
}

function signIn(){ //로그인 (이미 가입한 계정)
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("System: 로그인 되었습니다 : " + email);

    //Take user to a different or homepage
}

function signOut(){ //로그아웃  - 세션에서 계정에 대한 데이터가 날아감
    auth.signOut();
    alert("System: 로그아웃 되었습니다 : ");
}

//접속, 연결여부 표시
auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        alert("System: 활성화된 유저" + email);
        
        //is signed in
    }else{
        alert("System: 활성화된 유저가 없습니다");

        //no user is Singed
    }
})

//FB Console: https://console.firebase.google.com/u/0/project/tutorial-2256a/overview