function showFiles()
{
    let inputField=document.getElementById('input');
    let file=inputField.files;
    let fileReader=new FileReader;
    fileReader.onload=function(event)
    {
        let imageURL=fileReader.result;
        $('#preview').attr("src",`${imageURL}`)
    }
    FileReader.readAsDataURL(file[0])
}