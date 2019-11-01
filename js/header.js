let verboseIcon = () => {
    $(".linkedin").mouseenter(function(){
        console.log('event:', event)
        let icon = event.target.text
        event.target.text = 'bananananana'
        $(".linkedin").mouseleave(function(){
            event.target.text = icon
        })
    })
}
