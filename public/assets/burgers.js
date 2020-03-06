
$('#burger-form').on('submit', function(event) {
    event.preventDefault();
  
    
    const burgerData = {
      burger_name: $('[name = Burger-name]')
        .val()
        .trim()
    };
  
    $.ajax({
      url: '/api/burgers',
      method: 'POST',
      data: burgerData
    }).then(response => {
      console.log(response);
      location.reload();
    });
  });
  
  $('.devourBurger').on('click', function() {
    
    const burgerId = $(this).attr('data-burgerId');
  
    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: 'PUT',
      data: {
        devoured: 1
      }
    }).then(response => {
      console.log(response);
      location.reload();
    });
  });
  
 