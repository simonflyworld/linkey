class App {
  constructor() {
    this.events();
  }

  events() {
    document.onselectstart = () => {return false;}
		document.ondragstart = () => {return false;}
    document.oncontextmenu = () => {return false;}
    document.onload(() => {
      this.mobileOrientationLock();
      this.jumpOverUrlBar();
    })
  }

  mobileOrientationLock() {
    screen.orientation.lock('portrait-primary'); // “portrait-primary”, “portrait-secondary”, “landscape-primary”, and “landscape-secondary”
      // Internet Explorer 11+
    screen.msLockOrientation.lock("portrait-primary");
    // Firefox
    screen.mozLockOrientation.lock("portrait-primary");
  }

  jumpOverUrlBar() {
    window.scrollTo(0, 1);
  }
}

let app = new App();