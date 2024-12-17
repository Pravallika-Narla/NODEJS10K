function otp(){
    var otp = ""
    for(i=0;i<4;i++){
        var num = Math.floor(Math.random()*10)
        otp+=num
    }
    return  otp
}

module.exports=otp