import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const AudioVisualiserBlock = styled.div``;

type AudioVisualiserProps = {
  audioData: Uint8Array;
};

const AudioVisualiser: React.FC<AudioVisualiserProps> = ({ audioData }) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const draw = () => {
      if (!canvas.current) return;
      const height = canvas.current.height;
      const width = canvas.current.width;
      const context = canvas.current.getContext("2d");
      if (!context) return;
      const sliceWidth = (width * 1.0) / audioData.length;

      context.lineWidth = 2;
      context.strokeStyle = "#000000";
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgb(200, 200, 200)";

      context.beginPath();
      context.moveTo(0, height / 2);
      let x = 0;
      audioData.forEach((item) => {
        const y = (item / 255.0) * height;
        context.lineTo(x, y);
        x += sliceWidth;
      });

      context.lineTo(x, height / 2);
      context.stroke();
    };
    draw();
  }, [audioData]);

  return <canvas width="1000" height="1000" ref={canvas} />;
};

export default AudioVisualiser;
