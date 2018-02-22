$(document).ready(function() {


    var loadButton = document.getElementById('load-more');

    var userFeed = new Instafeed({
        get: 'user',
        userId: '240834558',
        accessToken: '240834558.1677ed0.ebc01b1b568d47d3957a810fff1cb157',
        sortBy: 'most-recent',
        limit: 18,
        resolution: 'thumbnail',
        after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
              loadButton.setAttribute('disabled', 'disabled');
            }
          },
    });

    // bind the load more button
    loadButton.addEventListener('click', function() {
        userFeed.next();
    });

    userFeed.run();

});