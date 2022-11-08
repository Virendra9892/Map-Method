let pobj = new Promise((resolve,reject)=>{
    let a  = 10;
    if(a>2){
        resolve(a+12);
    }
    else{
        reject("Promise Failed !");
    }
});

function pobj1(a){
    return new Promise((resolve,reject)=>{
        if(a>20){
            resolve(a+10);
        }
        else{
            reject("Promise Failed !");
        }
    });
}
pobj
.then((value)=>{
    console.log(value);
    return pobj1(value);
})
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});