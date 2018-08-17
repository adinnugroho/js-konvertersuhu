$(document).ready(function(){
    $('#btnhitung').click(function(){
        let asalSuhu = $('input[name=options]:checked').val();
        let suhuTujuan = $('input[name=options2]:checked').val();
        let valNum = $("#suhuawal").val();
        valNum = parseFloat(valNum);
        console.log(valNum);
        if (asalSuhu == "celsius") {
            console.log("ini selsius");
            switch(suhuTujuan){
                case "kelvin":
                hitung = valNum+273.15 +"K";
                break;
                case "fahrenheit":
                hitung = (valNum * 1.8)+32 +"F";
                break;
                default:
                hitung = "tidak tahu";

            }
            $("#angkaHasil").html(hitung);
        }
        else if (asalSuhu == "kelvin") {
            $("input[id=option4]").attr('disabled', false);
            $("input[id=option5]").attr('disabled', true);
            $("input[id=option6]").attr('disabled', false);
            console.log("ini kelvin");
            switch(suhuTujuan){
                case "celcius":
                hitung = valNum-273.15 +"C";
                break;
                case "fahrenheit":
                hitung = ((valNum-273.15)*1.8)+32 +"F";
                break;
                default:
                hitung = "tidak tahu";

            }
            $("#angkaHasil").html(hitung);
        }
        else if(asalSuhu == "fahrenheit"){
            $("input[id=option4]").attr('disabled', false);
            $("input[id=option5]").attr('disabled', false);
            $("input[id=option6]").attr('disabled', true);
            console.log('ini fahrenheit');
            switch(suhuTujuan){
                case "celcius":
                hitung = (valNum-32)/1.8+"C";
                break;
                case "kelvin":
                hitung = ((valNum-32)/1.8)+273.15+"K";
                break;
                default:
                hitung = "tidak tahu";

            }
            $("#angkaHasil").html(hitung);
        }
        else{
            console.log("apaya?");
        }
    });
});