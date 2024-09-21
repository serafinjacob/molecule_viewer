import { RangeSlider } from "flowbite-react";

interface SlidersProps {
  roll: number;
  setRoll: (roll: number) => void;
  pitch: number;
  setPitch: (pitch: number) => void;
  yaw: number;
  setYaw: (yaw: number) => void;
}

export default function Sliders({ roll, setRoll, pitch, setPitch, yaw, setYaw }: SlidersProps) {
  return (
    <>
      <RangeSlider value={roll} min={-180} max={180} step={1} onChange={(e) => setRoll(parseInt(e.target.value))} />
      <RangeSlider value={pitch} min={-180} max={180} step={1} onChange={(e) => setPitch(parseInt(e.target.value))} />
      <RangeSlider value={yaw} min={-180} max={180} step={1} onChange={(e) => setYaw(parseInt(e.target.value))} />
    </>
  );
}
