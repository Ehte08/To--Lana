if (window.screen.width > 900) 
    {
    const cursor = document.querySelector('.heart');

    document.addEventListener('mousemove', e => {
            cursor.setAttribute("style","top: "+(e.pageY+16)+"px; left: "+(e.pageX+18)+"px")
        }) 

    const cursor2 = document.querySelector('.heart2');

    document.addEventListener('mousemove', e => {
            cursor2.setAttribute("style","top: "+(e.pageY+15)+"px; left: "+(e.pageX+15)+"px")
        })

    const cursor3 = document.querySelector('.heart3');

    document.addEventListener('mousemove', e => {
            cursor3.setAttribute("style","top: "+(e.pageY+18)+"px; left: "+(e.pageX+21)+"px")
        })

    const finalcursor = document.querySelector('.heart4');

    document.addEventListener('mousemove', e => {
            finalcursor.setAttribute("style","top: "+(e.pageY+20)+"px; left: "+(e.pageX+24)+"px")
     })
}