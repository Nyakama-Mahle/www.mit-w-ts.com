
    var type = new Typed('.typing-text',{
        strings : [ '','WEB DEVELOPMENT', ' DATABASE MANAGEMENT', 'CRYPTOGRAPHY', 'COMPUTER REPAIR','UX/UI DESIGN','TUTORING MATHEMATICS','TUTORING JAVA AND C++'],
        typeSpeed: 50,
        loop:true
    
    });

    let themeColor = document.querySelectorAll('.theme-toggler span');
    themeColor.forEach(color => color.addEventListener('click', () =>{
        let background = color.style.background;
        document.querySelector('body').style.background = background;
    }));



