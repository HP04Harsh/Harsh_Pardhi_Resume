import { useEffect, useState } from "react";

/** Live clock formatted in Indian Standard Time. */
export function useLocalTime() {
  const [time, setTime] = useState<string>("--:--:--");
  const [date, setDate] = useState<string>("—");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const t = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      const d = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        day: "2-digit",
        month: "short",
      }).format(now);
      setTime(t);
      setDate(d);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return { time, date };
}
