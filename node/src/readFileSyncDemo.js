import {readFileSync, writeFile, renameSync} from 'fs':
try{
    const data=readFileSync('data.txt','utf8');
    console.log('File data:',data); 
}catch (err){
    console.log('Error reading file', err);
}
fstat.rename('data.txt','info.txt',(err)=>{
    if(err){
        console.log('Error renaming file', err);
    }
    else{
        console.log('File renamed successfully');
    }
});
try{
    const data=readFileSync('info.txt','utf8');
    console.log('File data after renaming:',data);              
}
fstat.renameSync('dataTwotxt.txt','newname.txt');
console.log('File renamed successfully');
catch (err){
    console.log('Error reading file', err);
}
writeFile('data.txt','This is new content',(err)=>{
    if(err){
        console.log('Error writing to file', err);
    }
    else{
        console.log('File written successfully');
    }
});     