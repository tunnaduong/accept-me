
status="Phát"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='v';
a[7]='ậ';
a[8]='y';
a[9]='!';
a[10]=' ';
a[11]='T';
a[12]='ớ';
a[13]=' ';
a[14]='C';
a[15]='ũ';
a[16]='n';
a[17]='g';
a[18]=' ';
a[19]='T';
a[20]='h';
a[21]='í';
a[22]='c';
a[23]='h';
a[24]=' ';
a[25]='P';
a[26]='h';
a[27]='á';
a[28]='t';
a[29]=' ';
a[30]='L';
a[31]='â';
a[32]='u';
a[33]=' ';
a[34]='r';
a[35]='ồ';
a[36]='i';
a[37]=' ';
a[38]='♥';
a[39]='Y';
a[40]='ê';
a[41]='u';
a[42]=' ';
a[43]='P';
a[44]='h';
a[45]='á';
a[46]='t';
a[47]='♥';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==48)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>Hihi! Tớ biết mà ( jf4:3 )</h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Nhìn góc trái màn hình</p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Đậu xanh ♥ Rau má</p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				