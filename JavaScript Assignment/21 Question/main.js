let cname=['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','The Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Eswatini','Ethiopia'];
if(cname.includes('Ethiopia')){
    let ind=cname.indexOf('Ethiopia');
    cname.splice(ind,1,'ETHIOPIA');
}else{
    cname.push("ETHIOPIA");
}
console.log(cname);
