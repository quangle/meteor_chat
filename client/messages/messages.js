Template.messages.helpers({
  messages: function () {
    return Messages.find({}, {
      sort: { timestamp: 1 }
    });
  }
});