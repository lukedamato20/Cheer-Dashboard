(function($) {
  'use strict';
  $(function() {
    var todoListItem = $('.todo-list');
    var todoListInput1 = $('.todo-list-input1'); // title
    var todoListInput2 = $('.todo-list-input2'); // difficulty
    var todoListInput3 = $('.todo-list-input3'); // priority

    $('.todo-list-add-btn').on("click", function(event) {
      event.preventDefault();

      var item = $(this).prevAll('.todo-list-input1').val();
      var difficulty = $(this).prevAll('.todo-list-input2').val();;
      var priority = $(this).prevAll('.todo-list-input3').val();;
      
      var difficultyColour = "";
      var priorityColour = "";

      if(difficulty=="1" || difficulty=="2" || difficulty=="3")
      {
        difficultyColour = "success";
      } 
      else if(difficulty=="4" || difficulty=="5" || difficulty=="6" ||  difficulty=="7")
      {
        difficultyColour = "warning";
      } 
      else if(difficulty=="8" || difficulty=="9" || difficulty=="10")
      {
        difficultyColour = "danger";
      } 

      if(priority=="1" || priority=="2" || priority=="3")
      {
        priorityColour = "success";
      } 
      else if(priority=="4" || priority=="5" || priority=="6" ||  priority=="7")
      {
        priorityColour = "warning";
      } 
      else if(priority=="8" || priority=="9" || priority=="10")
      {
        priorityColour = "danger";
      } 

      if (item) {
        // todoListItem.append("<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox'/>" + item + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>");
        console.log(priorityColour)
        console.log(difficultyColour)

        
        todoListItem.append("<tr><td><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox'>" + item + "</label></div></td><td><label class='badge badge-gradient-" + difficultyColour +"'>" + difficulty +"</label></td><td><label class='badge badge-gradient-" + priorityColour + "'>" + priority +"</label></td></tr>");
        todoListInput1.val("");
        todoListInput2.val("");
        todoListInput3.val("");

      }

    });

    todoListItem.on('change', '.checkbox', function() {
      if ($(this).attr('checked')) {
        $(this).removeAttr('checked');
      } else {
        $(this).attr('checked', 'checked');
      }

      $(this).closest("li").toggleClass('completed');

    });

    todoListItem.on('click', '.remove', function() {
      $(this).parent().remove();
    });

  });
})(jQuery);