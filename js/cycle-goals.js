function cycleGoals() {

    var words = [
        'Confidence', 'Technique', 'Fun'
        ], i = 0;

    var descrs = ['Build confidence and comfort to be an independent swimmer!',
    'Develop proper technique and form!', 'Create a fun and productive learning experience!'], i = 0;

    var pics = ['images/index/cycle-confidence.png', 'images/index/cycle-technique.png', 'images/index/cycle-fun.png'], i = 0;

    var word = $('#index-goals figcaption');
    var pic = $('#index-goals img');
    var descr = $('#index-goals p');

    setInterval(function(){

        word.addClass('puff-out-center');
        pic.addClass('puff-out-center');
        descr.addClass('puff-out-center');
        

        word.fadeOut(function(){
            
            word.html(words[i]).fadeIn(1000);
            word.removeClass('puff-out-center');
        });

        pic.fadeOut(function() {
            
            pic.attr('src', pics[i]).fadeIn(1000);
            pic.removeClass('puff-out-center');
        });

        descr.fadeOut(function(){
            
            descr.html(descrs[i]).fadeIn(1000);
            descr.removeClass('puff-out-center');
        });

        i=(i+1)%words.length;
        
    }, 4000);

}

cycleGoals();