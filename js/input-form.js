$("#search").on("keyup", function() {
    var value = $(this)
      .val().toLowerCase();
      $(".gallery a").filter(function() {
        $(this).toggle($(this).attr("data-title").toLowerCase().indexOf(value) > -1
      );
    });
  });
  