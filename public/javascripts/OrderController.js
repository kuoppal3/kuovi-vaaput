// Deletes order from DB
function deleteOrder(orderId) {
  $.ajax({
    url: '/tilaus',
    type: 'DELETE',
    data: { id: orderId },
    success: function(result) {
      // Refresh site
      window.location.href = "/tilaukset";
    }
  });
}

// Angular controller
(function(angular) {
  'use strict';
angular.module('orderController', [])
  .controller('OrderController', ['$scope', OrderController]);

function OrderController($scope){
  // TODO: if localstorage is not available
  if(typeof(localStorage) !== "undefined") {
    
  }
  
  // Data from session storage, if data exists
  if(!localStorage.orders || !localStorage.total) {
    $scope.orders = [];
    $scope.total = 0,0;
  } else {
    $scope.orders = JSON.parse(localStorage.orders);
    $scope.total = JSON.parse(localStorage.total);
  }

  // Adds order to the scope and to session storage
  $scope.addOrder = function(lure, price) {
    if(lure === "Vaappu tekstillä") {
      // Don't accept lure without text
      if($scope.vaappu === undefined) {
        return;
      }
      lure = lure + " \"" + $scope.vaappu + "\"";
    }
  
    // Go through all orders and check if lure exists already
    var lureExists = false;
    for(var i = 0; i < $scope.orders.length; ++i) {
      if($scope.orders[i].type === lure)
      {
        // Plus one to count
        $scope.orders[i].count++;
        lureExists = true;
      }
    }
    
    if(lureExists === false) {
      $scope.orders.push({type: lure, price: price, count: 1});
    }
    
    $scope.total = $scope.total + parseFloat(price);
    localStorage.orders = JSON.stringify($scope.orders);
    localStorage.total = JSON.stringify($scope.total);
    
    // CSS3 animation for cart
    $(".cart").toggleClass("cart-animate");
    // Remove class after the animation has played
    setTimeout(function(){ $(".cart").removeClass("cart-animate"); }, 300);
  };
  
  // Removes order from the scope and session storage
  $scope.removeOrder = function(orderToRemove) {
    $scope.total = $scope.total - parseFloat(orderToRemove.price);
  
    var index = $scope.orders.indexOf(orderToRemove);
    if(orderToRemove.count === 1) {
      $scope.orders.splice(index, 1);
    } else {
      $scope.orders[index].count--;
    }

    localStorage.orders = JSON.stringify($scope.orders);
    localStorage.total = JSON.stringify($scope.total);
  };

  // Removes all the orders
  $scope.removeAllOrders = function() {
    $scope.orders = [];
    $scope.total = 0,0;
    localStorage.orders = JSON.stringify($scope.orders);
    localStorage.total = JSON.stringify($scope.total);
  };

  // Returns count of individual lure in the cart
  $scope.returnCountStr = function(orderToCount) {
    if(orderToCount.count === 1) {
      return '';
    } else {
      return '(' + orderToCount.count + ' kpl)';
    }
  };
  
  // Returns total count of all the lures in the cart
  $scope.returnTotalCount = function() {
    var count = 0;
    for(var i = 0; i < $scope.orders.length; ++i) {
      count += $scope.orders[i].count;
    }
    
    return count;
  };
  
  // Returns total price of all the lures in the cart
  $scope.returnTotalPrice = function() {
    if($scope.total === 0) {
      return '';
    } else {
      return '' + $scope.total.toString() + ',00 €';  
    }
  };
  
  $scope.finishOrder = function() {
    // Check if all inputs are correctly filled
    if($scope.etunimi === undefined || $scope.sukunimi === undefined ||
    $scope.email === undefined || $scope.paikkakunta === undefined ||
    $scope.postinumero === undefined || $scope.postiosoite === undefined) {
      return;
    }
    
    // JSON data
    var json_order = { etunimi: $scope.etunimi,
                       sukunimi: $scope.sukunimi,
                       email: $scope.email,
                       paikkakunta: $scope.paikkakunta,
                       postinumero: $scope.postinumero,
                       postiosoite: $scope.postiosoite,
                       lisatiedot: $scope.lisatiedot,
                       tilaus: $scope.orders,
                       yhteensa: $scope.total
                    };

    // Post data to the server
    $.post("/tilaus", json_order);
    
    // Empty the cart and total variables
    $scope.orders = [];
    $scope.total = 0;
    localStorage.orders = JSON.stringify($scope.orders);
    localStorage.total = JSON.stringify($scope.total);
    
    // Show modal about completed order
    $('#completedOrderModal').modal('show');
  };
}
})(window.angular);