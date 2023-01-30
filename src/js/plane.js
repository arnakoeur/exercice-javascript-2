class Plane extends HTMLElement {
  constructor() {
    super();
    this.model = 'Boeing 777';
    this.passengers = 0;
    this.altitude = 0;
    this.speed = 0;
    this.fuel = 300;
    this.updateData();
  }

  addPassengers = (number) => {
    this.passengers += number;
  };

  removePassengers = (number) => {
    this.passengers -= number;
  };

  addFuel = (liters) => {
    this.fuel += liters;
  };

  increaseSpeed = (kmh) => {
    this.speed += kmh;
  };

  decreaseSpeed = (kmh) => {
    this.speed -= kmh;
  };

  stop = () => {
    this.speed = 0;
  };

  increaseAltitude = (meters) => {
    this.altitude += meters;
  };

  decreaseAltitude = (meters) => {
    this.altitude -= meters;
  };

  updateData = () => {
    setInterval(() => {
      this.useFuel();
      this.dispatchState();
    }, 1000);
  };

  useFuel() {
    if (this.speed > 0 && this.fuel > 0) {
      this.fuel = Math.max(0, (this.fuel -= 10));

      this.dispatchEvent(new CustomEvent('fuelused'));

      if (this.fuel === 0) {
        this.dispatchEvent(new CustomEvent('nofuel'));
      }
    }
  }

  dispatchState() {
    if (this.speed > 200 && this.fuel === 0) {
      this.speed = 0;
      this.altitude = 0;
      this.dispatchEvent(new CustomEvent('crash'));
    } else if (this.speed > 200) {
      this.altitude = 10000;
      this.dispatchEvent(new CustomEvent('takeoff'));
    } else if (this.speed < 200) {
      this.altitude = 0;
      this.dispatchEvent(new CustomEvent('landing'));
    }
  }
}

window.customElements.define('plane-element', Plane);
