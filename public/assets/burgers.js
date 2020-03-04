// listen for form submission
$('#burger-form').on('submit', function(event) {
    event.preventDefault();
  
    // collect cat data as an object
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
    // get id of cat we are adopting
    const catId = $(this).attr('data-burgerid');
  
    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: 'PUT',
      data: {
        adopted: 1
      }
    }).then(response => {
      console.log(response);
      location.reload();
    });
  });
  
  // $('.deleteCat').on('click', function() {
  //   // get cat id
  //   const catId = $(this).attr('data-catid');
  
  //   // delete cat
  //   $.ajax({
  //     url: `/api/cats/${catId}`,
  //     method: 'DELETE'
  //   }).then(response => {
  //     console.log(response);
  //     location.reload();
  //   });
  // });