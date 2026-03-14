function vote(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var res=document.getElementById("res")
// alert(age)
 //   if(age>=18){
 //       alert("Eligible to Vote")
 //   }else{
 //       alert ("you are still a child")
 //   }
    if(age>=18){
        res.innerHTML =name+""+" Eligible to vote"
    }else{
        res.innerHTML =name+""+" you are still a child"
    }
}