Template.listings.helpers({
  channels: function () {
    return Channels.find();
  },

  active: function(name) {
    if (Session.get('channel') === name) {
      return "active";
    } else {
      return "";
    }
  }
});