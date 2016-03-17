/**
 * Created by gilbertor on 3/17/16.
 */
var MenuView = function(){
  this.header  = "<div/>";
  this.content = "<div/>";
  this.pizzaView = new PizzaView();
  this.initialize = function(){
    this.pizzaView.initialize();
    this.header  = Handlebars.compile($('#menu-header-template').html());
    this.content = Handlebars.compile($('#menu-content-template').html());
  }
  this.render = function(){
    var context = {
      messages: app.messages,
      pizzas:   pizzas
    };
    $('#header').html(this.header(context));
    $('.content').html(this.content(context));
    $('.pizzas li a').click(function(){
      var pizzaId = $(this).data("pizzaid");
      app.pizzeriaView.menuView.pizzaView.render(pizzaId);
    });
  }
};
