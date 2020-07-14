function cycleGoals() {

    var words = [
        'Confidence', 'Technique', 'Fun'
        ], i = 0;

    var descrs = ['Build confidence and comfort to be an independent swimmer!',
    'Develop proper technique and form!', 'Create a fun and productive learning experience!'], i = 0;

    var pics = ['/images/index/cycle-confidence.png', '/images/index/cycle-technique.png', '/images/index/cycle-fun.png'], i = 0;

    var word = $('#index-goals figcaption');
    var pic = $('#index-goals img');
    var descr = $('#index-goals p');

    setInterval(function(){
        

        word.fadeOut(function(){
            word.html(words[i]).fadeIn();
        });

        pic.fadeOut(function() {
            pic.attr('src', pics[i]).fadeIn();
        });

        descr.fadeOut(function(){
            descr.html(descrs[i]).fadeIn();
        });

        i=(i+1)%words.length;
        
    }, 3000);

}

cycleGoals();