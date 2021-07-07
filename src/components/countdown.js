import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(900);
  const [message, setMessage] = useState("");

  const format = (time) => {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
  };

  let count1 = 900;

  useEffect(() => {
    const inter = setInterval(() => {
      if (count1 <= 0) {
        clearInterval(inter);
        setMessage("Click here to skip this ad");
      } else {
        count1 = count1 - 1;
        setCount(count1);
      }
    }, 1000);

    return function cleanup() {
      clearInterval(inter);

      console.log("clean up");
    };
  }, []);

  return (
    <div>
      <h1>{message ? message : format(count)}</h1>
    </div>
  );
};

export default Counter;
