alert("!!مرحبا بك في موقعي الذي سيحسب درجتك");
let grade = 95;
 grade= prompt(" اكتب درجتك بالأرقام")
console.log("%cGrade", 'color: red; font-size: 70px;')
if(grade>=90 && grade <=100) {
    console.log("%cلقد حصلت على امتياز 🥳", 'color: red; font-size: 70px;')
}  
if (
    grade >= 80 && grade <= 89 ) {
        console.log("%cلقد حصلت على جيد جداً🤩", 'color: red; font-size: 70px;')
    } 
if( grade >= 70 && grade <=79 )  {
    console.log("%cلقد حصلت على جيد🙂", 'color: red; font-size: 70px;')
}  
if( grade >= 60 && grade <=69) {
console.log ( "%cلقد حصلت على مقبول😕", 'color: red; font-size: 70px;')
}
if( grade >= 50 && grade <= 59 ) {
    console.log ( "%cلقد حصلت على ضعيف☹️"
    ,'color: red; font-size: 70px;' )
}
if( grade <50 ) {
    console.log ("%cراسب💔", 'color: red; font-size: 70px;')
}

// جافاسكربت ليست جافا


