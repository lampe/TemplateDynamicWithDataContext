if (Meteor.isClient) {
  Template.body.helpers({
    items: function () {
      return {test:"someTest"}
    }
  });
  Template.hello.onCreated(function () {
    console.log("onCreated", this.data);
  });
  Template.hello.onRendered(function () {
    console.log("onRendered", this.data);
  });
  Template.hello.helpers({
    helper: function () {
      console.log("helper", this);
      return this;
    }
  });
}
