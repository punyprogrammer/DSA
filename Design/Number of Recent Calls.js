class RecentCounter{
    constructor(){
        this.pingArray = [];

    }
    ping(t){
      this.pingArray.push(t);
      const n = this.pingArray.length;
      let counter = 0;
      for(let i = n-1 ;i>=0;i--){
        if(this.pingArray[i]+3000<t){
            break;
        }
        else {
            counter++;
        }
      }
      return counter;
    //   remove redundant calls
    this.pingArray = this.pingArray.slice(n- counter);
    }
}
