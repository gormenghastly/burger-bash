$(document).ready(function() {
  $('#place-order').on('click', function(event) {
    event.preventDefault();
    var newBurg = {
      burger_name: $('request')
        .val()
        .trim(),
      devoured: false
    };
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurg
    }).then(function() {
      console.log('new burger created');
      location.reload();
    });
  });
  $('#devour').on('click', function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    $.ajax('api/cats/' + id, {
      type: 'PUT',
      data: devourState
    }).then(function() {
      console.log('devoured!');
      location.reload();
    });
  });
});
