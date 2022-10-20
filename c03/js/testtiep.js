var restaurant = {
    name: 'Royal',
    tables : 40,
    booked : 30,
    checkAvailability : function () {
        return this.tables - this.booked;
    }
};

var elName = document.getElementById('restaurantName');
elName.textContent = restaurant.name;

var elTables = document.getElementById('tables');
elTables.textContent = restaurant.checkAvailability();