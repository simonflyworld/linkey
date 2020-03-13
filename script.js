class app {
  constructor() {
    this.events();
  }

  events() {
    document.onselectstart = () => {return false;}
		document.ondragstart = () => {return false;}
    document.oncontextmenu = () => {return false;}
    document.onload(() => {
      this.mobileLockRotation();
      this.jumpOverUrlBar();
    })
  }

  mobileLockRotation() {
    // If browser supports
    if ('orientation' in screen) {
      // document.documentElement.requestFullScreen();
      screen.orientation.lock('portrait-primary'); // “portrait-primary”, “portrait-secondary”, “landscape-primary”, and “landscape-secondary”
      // Internet Explorer 11+
      screen.msLockOrientation.lock("portrait-primary");
      // Firefox
      screen.mozLockOrientation.lock("portrait-primary");
    
      // screen.orientation.unlock();
    }
  }

  jumpOverUrlBar() {
    window.scrollTo(0, 1);
  }
}