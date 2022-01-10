function pval(x){
    var y = x;
    document.getElementsByName("display")[0].value+=y;
}

function ev(){
    let c = 0;
    let i = 0;
    let x = document.getElementsByName("display")[0].value;
    for(i = 0; i < x.length; i++){
        if(x[i]=='+'||x[i]=='-'||x[i]=='*'||x[i]=='/'||x[i]=='&'||x[i]=='|'){
            c = i;
            break;
        }
            
    }
    let a = x.substr(0,c);
    let b = x.substr(c+1);
    //
    let ans = 0;
    let dec1 = convertIntoDecimal(a);
    let dec2 = convertIntoDecimal(b);

    switch(x[c]){
        case '+' : ans = dec1 + dec2;
            break;
        case '-' : ans = dec1 - dec2;
            break;
        case '*' : ans = dec1 * dec2;
            break;
        case '/' : ans = parseInt(dec1/dec2);
            break;
        case '&' : ans = dec1 & dec2;
            break;
        case '|': ans = dec1 | dec2;
            
    }
    if(ans < 0){
        ans = convertIntoHexa(Math.abs(ans));
        document.getElementsByName("result")[0].value+="-"+ans;
    }else{
        ans = convertIntoHexa(ans);
        document.getElementsByName("result")[0].value+=ans; 
    }
}

function convertIntoHexa(ans){
    let quotient = ans;
    let val = 0;
    let hexa = "";
    let i = 0;
    while(quotient!=0){
        val = quotient % 16;
       switch(val){
            case 0: val = 0;
                break;
            case 1: val = 1;
                break;
            case 2: val = 2;
                break;
            case 3: val = 3;
                break;
            case 4: val = 4;
                break;
            case 5: val = 5;
                break;
            case 6: val = 6;
                break;
            case 7: val = 7;
                break;
            case 8: val = 8;
                break;
            case 9: val = 9;
                break;
            case 10: val = "A";
                break;
            case 11: val = "B";
                break;
            case 12: val = "C";
                break;
            case 13: val = "D";
                break;
            case 14: val = "E";
                break;
            case 15: val = "F";
        }
        hexa += val;
        quotient=parseInt(quotient/16);
    }
    var rev = "";
    for(var l = hexa.length-1; l>=0;l-- )
        rev+=hexa[l];
    if(rev!="")
        return rev;
    else return 0;
}

function convertIntoDecimal(a){
    let i = 0;
    let val = 0,dec = 0;
    let len = a.length;
    len--;
    for(i = 0; i < a.length; i++){
        switch(a[i]){
            case "0": val = 0;
                break;
            case "1": val = 1;
                break;
            case "2": val = 2;
                break;
            case "3": val = 3;
                break;
            case "4": val = 4;
                break;
            case "5": val = 5;
                break;
            case "6": val = 6;
                break;
            case "7": val = 7;
                break;
            case "8": val = 8;
                break;
            case "9": val = 9;
                break;
            case "A": val = 10;
                break;
            case "B": val = 11;
                break;
            case "C": val = 12;
                break;
            case "D": val = 13;
                break;
            case "E": val = 14;
                break;
            case "F": val = 15;
        }
        dec += val * (16**len);
        len--;
    }
    return dec;
}
function CLR(){
    document.getElementsByName("display")[0].value = '';
    document.getElementsByName("result")[0].value ="Result : "; 
}