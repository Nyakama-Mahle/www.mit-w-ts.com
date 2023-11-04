
    var type = new Typed('.typing-text',{
        strings : [ 'Proficiency in software Engineering practices such as ',' DevOps ', 'Agile  & Waterfall developmnent ', 'Testing' ,'infrastructure as code', 'Continuous Integration and Contnuous Delivery'],
        typeSpeed: 50,
        loop:true
    
    });

    let themeColor = document.querySelectorAll('.theme-toggler span');
    themeColor.forEach(color => color.addEventListener('click', () =>{
        let background = color.style.background;
        document.querySelector('body').style.background = background;
    }));



