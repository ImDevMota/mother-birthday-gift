import { useEffect, useState } from "react";
import { intervalToDuration } from "date-fns";

function Chronometer() {
  const [duration, setDuration] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const dataPassada = new Date(1975, 5, 30, 0, 0, 0); // 30 de junho de 1975 às 13h (mês 5 = junho)

  useEffect(() => {
    const updateDuration = () => {
      const agora = new Date();
      const novaDuracao = intervalToDuration({
        start: dataPassada,
        end: agora,
      });
      setDuration(novaDuracao);
    };

    updateDuration(); // atualizar ao montar
    const timer = setInterval(updateDuration, 1000); // atualizar a cada segundo

    return () => clearInterval(timer); // limpar ao desmontar
  }, []);

  return (
    <div className="flex flex-col absolute z-0 w-[75%] justify-center items-center text-white bottom-0">
      <h2 className="text-2xl font-bold mb-4 text-center">
        <strong>A mulher mais incrível nasceu há:</strong> <br />
      </h2>

      <div className="flex flex-rows text-center">
        <p className="text-[18px] font-bold">
          {/* Anos */}
          {duration.years > 0 ? (
            <span>
              {duration.years} {duration.years === 1 ? "ano" : "anos"},{" "}
            </span>
          ) : null}

          {/* Meses */}
          {duration.years > 0 && duration.months > 0 ? (
            <span>
              {duration.months} {duration.months === 1 ? "mês" : "meses"},{" "}
            </span>
          ) : null}

          {/* Dias */}
          {duration.years > 0 && duration.days > 0 ? (
            <span>
              {duration.days} {duration.days === 1 ? "dia" : "dias"},{" "}
            </span>
          ) : null}

          {/* Horas */}
          {duration.hours > 0 ? (
            <span>
              {duration.hours} {duration.hours === 1 ? "hora" : "horas"},{" "}
            </span>
          ) : null}

          {/* Minutos */}
          {duration.minutes > 0 ? (
            <span>
              {duration.minutes} {duration.minutes === 1 ? "minuto" : "minutos"}
              ,{" "}
            </span>
          ) : null}

          {/* Segundos */}
          {duration.seconds > 0 ? (
            <span>
              {duration.seconds}{" "}
              {duration.seconds === 1 ? "segundo" : "segundos"}.
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default Chronometer;
