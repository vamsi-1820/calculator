let a=document.getElementById("output");
function display(num)
{
    a.value+=num;
}
function result()
{
    a.value=eval(a.value);
}
function Clear()
{
    a.value="";
}
function del()
{
    a.value=a.value.slice(0,-1);
}