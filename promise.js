function pobj(a){
    return new Promise((resolve,reject)=>{
        if(a>10){
            resolve("Sucess");
        }
        else{
            reject("Failed");
        }
    });
}
pobj(20)
.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});