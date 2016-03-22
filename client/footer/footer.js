Template.footer.events({
  'keypress input': function(e) {
    var inputVal = $('.input-box-text').val();
    if(!!inputVal) {
      var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
      if (charCode == 13) {
        e.stopPropagation();
        Meteor.call('newMessage', {
          text: inputVal,
          channel: Session.get('channel')
        });
        $('.input-box_text').val("");
        return false;
      }
    }
  }
});