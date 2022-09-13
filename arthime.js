function calc()
{
  var n1=parseInt(document.getElementById('n1').value);
  var n2=parseInt(document.getElementById('n2').value);
  var operators = document.getElementById('operators').value;
  

  if(operators==='+')
  {
    document.getElementById('res').value=n1+n2;
  } 
  
  if(operators==='-')
  {
    document.getElementById('res').value=n1-n2;
  }

  if(operators==='*')
  {
    document.getElementById('res').value=n1*n2;
  }

  if(operators==='/')
  {
    document.getElementById('res').value=n1/n2;
  }
}