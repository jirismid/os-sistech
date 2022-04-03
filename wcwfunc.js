function BigImage(Imag, w, h){
   var myWindow = window.open('', 'detail', 'fullscreen=0, scrollbars=1, toolbar=0,location=0,directories=0,status=0,menubar=0, resizable=0,copyhistory=0,width=' + w + ', height=' + h);
   myWindow.document.open();
   myWindow.document.write('<HTML><HEAD><TITLE>Detail obrázku</TITLE></HEAD>');
   myWindow.document.write('<BODY BGCOLOR="#CCCCCC"><CENTER><IMG name="obr" HSPACE=0 VSPACE=0 SRC='+Imag+'></CENTER>');
   myWindow.document.write('</BODY></HTML>');
   myWindow.document.close()
}

